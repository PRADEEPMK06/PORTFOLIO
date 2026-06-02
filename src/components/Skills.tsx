"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "DevOps & Infrastructure",
    icon: "⚙️",
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "GitHub Actions"],
  },
  {
    title: "Cloud & Monitoring",
    icon: "☁️",
    skills: ["AWS EC2", "AWS S3", "Linux", "Prometheus", "Grafana"],
  },
  {
    title: "Backend Engineering",
    icon: "⚡",
    skills: ["Python", "FastAPI", "Node.js", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend Engineering",
    icon: "🎨",
    skills: ["React.js", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit focused on scalable architecture, automated pipelines, and modern web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-[40px] group-hover:bg-brand-500/20 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium text-sm hover:bg-brand-500 hover:text-white hover:border-brand-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
