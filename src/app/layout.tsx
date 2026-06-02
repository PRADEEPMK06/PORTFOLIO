import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pradeep M K | DevOps & Cloud Engineer",
  description: "Portfolio of Pradeep M K - DevOps Engineer, Cloud Engineer, and Full Stack Developer specializing in cloud-native applications, infrastructure automation, and modern web development.",
  keywords: ["Pradeep M K", "DevOps Engineer", "Cloud Engineer", "Full Stack Developer", "AWS", "Infrastructure Automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`} suppressHydrationWarning>
      <body className="antialiased text-slate-200 bg-[#0a0a0f] min-h-screen flex flex-col relative selection:bg-brand-500/30 selection:text-brand-50">
        {/* Ambient background glows */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-600/10 blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyber-blue/10 blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        </div>
        {children}
      </body>
    </html>
  );
}
