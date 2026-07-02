"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Code2, ExternalLink } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Get in touch via email or connect with me on social platforms. Open to internship opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0 border border-brand-500/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-1">Email</h4>
                    <a href="mailto:pradeepmk799@gmail.com" className="text-lg text-white hover:text-brand-400 transition-colors">
                      pradeepmk799@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-4">Primary Contact</h4>
                <a 
                  href="mailto:pradeepmk799@gmail.com"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg transition-colors w-full justify-center font-semibold"
                >
                  <Mail size={20} />
                  Send Email
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-4">Follow & Connect</h4>
                <div className="grid grid-cols-2 gap-4">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/pradeepmk17/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 hover:bg-blue-600/30 text-white rounded-lg transition-colors border border-white/10 hover:border-blue-500/50"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>

                  {/* LeetCode */}
                  <a 
                    href="https://leetcode.com/u/pradeepMK/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 hover:bg-orange-600/30 text-white rounded-lg transition-colors border border-white/10 hover:border-orange-500/50"
                  >
                    <Code2 size={18} />
                    <span className="text-sm font-medium">LeetCode</span>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/PRADEEPMK06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 hover:bg-slate-700 text-white rounded-lg transition-colors border border-white/10 hover:border-slate-400/50"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>

                  {/* Location */}
                  <a 
                    href="#"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-white/10 cursor-default"
                  >
                    <MapPin size={18} />
                    <span className="text-sm font-medium">Tamil Nadu</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-slate-400">
                  💡 <span className="text-slate-300">Tip:</span> Email me directly or connect on LinkedIn for faster response!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
