'use client';

import { motion } from 'motion/react';
import { Code2, ExternalLink } from 'lucide-react';
import resumeData from '@/data/resume.json';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Key Projects</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Code2 className="h-5 w-5" />
                  </div>
                  {project.links.length > 0 && (
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                <div className="mb-6 font-mono text-xs text-indigo-400">
                  {project.stack}
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
