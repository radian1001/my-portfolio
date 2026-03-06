'use client';

import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
import resumeData from '@/data/resume.json';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Impact & Achievements</h2>
          <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition-all hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="mb-2 text-4xl font-bold text-white tracking-tighter">
                  {achievement.item}
                </div>
                <div className="mb-2 text-sm font-medium text-indigo-300 uppercase tracking-wider">
                  {achievement.title}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {achievement.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
