"use client";

import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] pt-12 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600/20 p-2 rounded-lg border border-brand-500/30">
              <Terminal className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-white block">
                PMK<span className="text-brand-500">.</span>
              </span>
              <span className="text-xs text-slate-400">DevOps & Cloud Engineer</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pradeep M K.</p>
        </div>
      </div>
    </footer>
  );
}
