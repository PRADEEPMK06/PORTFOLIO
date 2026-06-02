"use client";

import { motion } from "framer-motion";
import { ExternalLink, Workflow, Server, ShieldCheck, Activity } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    id: "taskforge",
    title: "TASKFORGE",
    subtitle: "Production-Ready DevOps Task Management Platform",
    description: "A cloud-native DevOps-powered task management platform with CI/CD pipelines, containerized microservices, and Kubernetes orchestration.",
    image: "/images/taskforge/hero.png",
    tech: ["FastAPI", "Docker", "Kubernetes", "Terraform", "Jenkins", "AWS", "Prometheus", "Grafana"],
    github: "https://github.com/PRADEEPMK06/TASKFORGE",
    demo: "https://taskforge-fontend.onrender.com/auth.html",
    features: [
      { icon: <Workflow size={16} />, text: "CI/CD Workflows" },
      { icon: <Server size={16} />, text: "K8s Orchestration" },
      { icon: <Activity size={16} />, text: "Live Monitoring" },
    ],
    featured: true,
  },
  {
    id: "deployflow",
    title: "DEPLOYFLOW",
    subtitle: "Cloud Infrastructure Automation Platform",
    description: "Enterprise-grade infrastructure automation platform with Terraform IaC, Ansible configuration management, and multi-cloud deployment pipelines.",
    image: "/images/deployflow/hero.png",
    tech: ["AWS", "Terraform", "Ansible", "Jenkins", "Docker", "Kubernetes"],
    github: "https://github.com/PRADEEPMK06/DEPLOYFLOW",
    demo: "https://www.deployflow.com",
    features: [
      { icon: <ShieldCheck size={16} />, text: "Infrastructure as Code" },
      { icon: <Workflow size={16} />, text: "Automated Provisioning" },
    ],
    featured: true,
  },
  {
    id: "insightpdf",
    title: "InsightPDF",
    subtitle: "AI Document Processing",
    description: "AI-powered document processing and search system to upload, analyze, and extract structured data from PDF files.",
    image: "/insightpdf.jpeg",
    tech: ["Python", "FastAPI", "Ollama", "OpenAI API", "PyMuPDF"],
    github: "https://github.com/PRADEEPMK06/pdf_rag_app",
    demo: null,
    features: [],
    featured: false,
  },
  {
    id: "timetable",
    title: "Timetable Generator",
    subtitle: "Automated Scheduling System",
    description: "Generates customized timetables for students and professionals with an intuitive drag-and-drop interface.",
    image: "/tt.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PRADEEPMK06/TIMETABLE",
    demo: "https://timetable-auto-builder.vercel.app/",
    features: [],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            A showcase of enterprise-grade cloud automation, AI integrations, and full-stack development.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col ${
                project.featured ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-brand-500/30 transition-colors group`}
            >
              {/* Project Image Area */}
              <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto lg:h-[400px] overflow-hidden bg-[#13131a]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10 opacity-60"></div>
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-500 via-transparent to-transparent"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-lighten opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Project Content Area */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12">
                {project.featured && (
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold tracking-wider uppercase border border-brand-500/30">
                    Featured Enterprise Project
                  </div>
                )}
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <h4 className="text-lg text-cyber-blue mb-4">{project.subtitle}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.features.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="text-brand-500">{feature.icon}</span>
                        {feature.text}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
