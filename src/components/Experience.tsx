"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "experience",
    date: "2025",
    title: "PDFs to Searchable Knowledge Base",
    organization: "Intel Corporation - Internship",
    description: "Developed a system to convert PDFs into searchable knowledge bases using AI and NLP techniques. Optimized data extraction workflows and improved search accuracy using vector databases and LLM integrations.",
    icon: <Briefcase size={20} />,
  },
  {
    id: 2,
    type: "education",
    date: "2023 - Present",
    title: "B.E. in Information Technology",
    organization: "Sri Shakthi Institute of Engineering and Technology",
    description: "3rd Year Student specializing in Web Development, Cloud Computing, and DevOps engineering principles. Consistently maintaining a strong academic record while building practical projects.",
    icon: <GraduationCap size={20} />,
  },
];

const certifications = [
  "DevOps Engineering Training",
  "Advanced Web Development Workshop",
  "Debugging & Optimization Workshop",
  "Modern UI/UX Design Principles",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#0d0d14]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience & <span className="text-gradient">Education</span>
              </h2>
              <div className="w-16 h-1 bg-brand-500 rounded-full"></div>
            </motion.div>

            <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  <div className="absolute -left-6 md:-left-8 top-0 p-3 rounded-full bg-[#0d0d14] border-2 border-brand-500 text-brand-400 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                    {exp.icon}
                  </div>
                  
                  <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-colors">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-sm font-medium text-cyber-blue mb-4">{exp.organization}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Certifications & <span className="text-gradient">Workshops</span>
              </h2>
              <div className="w-16 h-1 bg-cyber-blue rounded-full"></div>
            </motion.div>

            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyber-blue/30 transition-all cursor-default group"
                >
                  <div className="p-3 rounded-lg bg-cyber-blue/10 text-cyber-blue group-hover:bg-cyber-blue/20 transition-colors">
                    <Award size={20} />
                  </div>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 p-8 rounded-2xl glass-panel relative overflow-hidden border border-[#ffa116]/20 group hover:border-[#ffa116]/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffa116]/10 rounded-full blur-[40px] group-hover:bg-[#ffa116]/20 transition-colors"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-[#ffa116]">LeetCode</span> Stats
                  </h3>
                  <a href="https://leetcode.com/u/pradeepMK/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-[#ffa116] transition-colors">
                    @pradeepMK
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">295</div>
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Problems Solved</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-black/20 p-3 rounded-lg border border-white/5 text-center">
                  <div className="text-sm font-semibold text-[#00b8a3]">147</div>
                  <div className="text-[10px] text-slate-400 uppercase">Easy</div>
                </div>
                <div className="bg-black/20 p-3 rounded-lg border border-white/5 text-center">
                  <div className="text-sm font-semibold text-[#ffc01e]">126</div>
                  <div className="text-[10px] text-slate-400 uppercase">Medium</div>
                </div>
                <div className="bg-black/20 p-3 rounded-lg border border-white/5 text-center">
                  <div className="text-sm font-semibold text-[#ef4743]">22</div>
                  <div className="text-[10px] text-slate-400 uppercase">Hard</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Contest Rating</span>
                  <span className="font-semibold text-white">1,530</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Global Ranking</span>
                  <span className="font-semibold text-white">Top 36.39%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Recent Badge</span>
                  <span className="font-semibold text-[#ffa116]">50 Days Badge 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
