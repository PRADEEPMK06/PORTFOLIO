const fs = require("fs");
const path = require("path");


const USERNAME = process.env.LEETCODE_USERNAME;

const query = `
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username

    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }

    profile {
      ranking
    }

    badges {
      displayName
    }

    userCalendar {
      activeYears
    }
  }

  userContestRanking(username: $username) {
    rating
    globalRanking
    attendedContestsCount
    topPercentage
  }
}
`;

async function fetchLeetCode() {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: `https://leetcode.com/${USERNAME}/`,
      },
      body: JSON.stringify({
        query,
        variables: {
          username: USERNAME,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(JSON.stringify(result.errors, null, 2));
    }

    const user = result.data.matchedUser;
    const contest = result.data.userContestRanking;

    const stats = user.submitStats.acSubmissionNum;

    const total =
      stats.find((s) => s.difficulty === "All")?.count || 0;

    const easy =
      stats.find((s) => s.difficulty === "Easy")?.count || 0;

    const medium =
      stats.find((s) => s.difficulty === "Medium")?.count || 0;

    const hard =
      stats.find((s) => s.difficulty === "Hard")?.count || 0;

    const latestBadge =
      user.badges.length > 0
        ? user.badges[user.badges.length - 1].displayName
        : "No Badge";

    const output = {
      username: user.username,
      totalSolved: total,
      easySolved: easy,
      mediumSolved: medium,
      hardSolved: hard,
      contestRating: contest?.rating
        ? Math.round(contest.rating)
        : 0,
      globalRanking: contest?.globalRanking ?? 0,
      topPercentage: contest?.topPercentage ?? 0,
      attendedContests: contest?.attendedContestsCount ?? 0,
      profileRanking: user.profile.ranking,
      badge: latestBadge,
      updatedAt: new Date().toISOString(),
    };

    const outputDir = path.join(__dirname, "..", "public", "data");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFile = path.join(outputDir, "leetcode.json");

    fs.writeFileSync(
      outputFile,
      JSON.stringify(output, null, 2)
    );

    console.log("✅ LeetCode stats updated.");
    console.log(output);
  } catch (err) {
    console.error("❌ Failed to fetch LeetCode stats");
    console.error(err);
    process.exit(1);
  }
}

fetchLeetCode();