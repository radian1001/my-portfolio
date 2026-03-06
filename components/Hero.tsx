'use client';

import { motion } from 'motion/react';
import { ArrowDown, Download, Terminal, Eye } from 'lucide-react';
import resumeData from '@/data/resume.json';

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center max-w-4xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <Terminal className="h-4 w-4 text-indigo-400" />
          <span className="font-mono text-sm text-white/80">{resumeData.basics.title}</span>
        </div>
        
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            {resumeData.basics.name}
          </span>
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed">
          {resumeData.basics.summary.split('.')[0]}. {resumeData.basics.summary.split('.')[1]}.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap justify-center">
          <button
            onClick={scrollToExperience}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-slate-950 transition-transform hover:scale-105 active:scale-95"
          >
            <span>View Experience</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </button>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            <span>View Resume</span>
            <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
          </a>

          <a
            href="/resume.pdf"
            download="Abhyudaya_Baghel_Resume.pdf"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            <span>Download Resume</span>
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="animate-bounce">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1">
              <div className="h-2 w-1.5 rounded-full bg-white/60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
