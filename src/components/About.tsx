"use client";

import { motion } from "framer-motion";
import { Code2, Server, Terminal, Database, Cloud } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "7+" },
  { label: "Technologies", value: "15+" },
  { label: "Internships", value: "1" },
  { label: "Year Student", value: "Final" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Engineering the Future of Cloud & Web</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                I'm a <strong>Final Year B.Tech Information Technology student</strong> at Sri Shakthi Institute of Engineering and Technology, driven by a deep passion for cloud computing, DevOps automation, and full-stack development. As a <strong className="text-brand-400">continuous learner</strong>, I constantly explore emerging technologies to build innovative solutions.
              </p>
              <p>
                My journey in tech is defined by a continuous pursuit of building resilient, scalable systems. I thrive at the intersection of development and operations, leveraging tools like Docker, Kubernetes, and Terraform to orchestrate robust infrastructure.
              </p>
              <p>
                Whether I'm architecting a CI/CD pipeline, optimizing a backend API, or crafting a responsive user interface, I approach every problem with an engineering mindset—focusing on performance, security, and maintainability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass p-4 rounded-xl border border-white/5">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4 transform translate-y-8">
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400">
                <Terminal size={24} />
              </div>
              <h4 className="text-xl font-semibold text-white">DevOps</h4>
              <p className="text-slate-400 text-sm">Automating pipelines, containerization, and infrastructure as code.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyber-blue/20 flex items-center justify-center text-cyber-blue">
                <Cloud size={24} />
              </div>
              <h4 className="text-xl font-semibold text-white">Cloud Architecture</h4>
              <p className="text-slate-400 text-sm">Designing scalable and highly available distributed systems.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4 transform translate-y-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Code2 size={24} />
              </div>
              <h4 className="text-xl font-semibold text-white">Full Stack</h4>
              <p className="text-slate-400 text-sm">Building responsive web apps with React, Node.js, and modern APIs.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                <Database size={24} />
              </div>
              <h4 className="text-xl font-semibold text-white">Data Systems</h4>
              <p className="text-slate-400 text-sm">Managing complex data flows, MongoDB, and SQL databases.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
