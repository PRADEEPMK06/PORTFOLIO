"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cloud, Server } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Aspiring DevOps Engineer",
  "Aspiring Full Stack Developer",
  "Aspiring Cloud Engineer",
  "Aspiring AWS Automation Enthusiast"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated DevOps Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] text-brand-500"
        >
          <Cloud size={64} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] right-[15%] text-cyber-blue"
        >
          <Server size={48} />
        </motion.div>
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] right-[25%] text-brand-400 opacity-50"
        >
          <Terminal size={32} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-slate-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Final Year B.Tech Student | Coimbatore, Tamil Nadu, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Hi, I'm <span className="text-gradient-primary">PRADEEP M K</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 md:h-16 flex items-center justify-center mb-6"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-300">
            {text}
            <span className="inline-block w-[3px] h-[1em] bg-brand-500 ml-1 animate-pulse"></span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A software engineer specializing in building scalable cloud-native applications, 
          infrastructure automation, and modern web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#projects" className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-1">
            View Projects <ArrowRight size={18} />
          </Link>
          <a href="https://drive.google.com/file/d/1eeLyb6TB6LbqzE6sNtSYq_SKYV1Bl5ks/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 border border-white/10 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
            Download Resume <Download size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a href="https://github.com/PRADEEPMK06" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 glass rounded-full">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pradeepmk17/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 glass rounded-full">
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
