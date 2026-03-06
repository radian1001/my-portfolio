'use client';

import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import resumeData from '@/data/resume.json';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Experience</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 ml-4 sm:ml-0 sm:pl-0 sm:border-none space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-8 sm:items-center"
            >
              {/* Timeline Dot (Desktop) */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10 -z-10" />
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
              
              {/* Timeline Dot (Mobile) */}
              <div className="sm:hidden absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-slate-950" />

              {/* Content */}
              <div className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 ${index % 2 === 0 ? 'sm:col-start-1 sm:text-right' : 'sm:col-start-3'}`}>
                <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'sm:items-end' : 'sm:items-start'}`}>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-indigo-400 font-medium">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                
                <ul className={`space-y-3 text-sm text-slate-300 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed">
                      {bullet}
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
