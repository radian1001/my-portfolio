'use client';

import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import resumeData from '@/data/resume.json';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-indigo-400" />
                Education
              </h2>
            </motion.div>

            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l border-white/10"
                >
                  <div className="absolute left-0 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <div className="mt-1 text-indigo-400 font-medium">{edu.institution}</div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-400">
                    <span>{edu.dates}</span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    {edu.details}
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
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                <Award className="h-8 w-8 text-indigo-400" />
                Certifications
              </h2>
            </motion.div>

            <div className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-slate-200">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
