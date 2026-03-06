'use client';

import resumeData from '@/data/resume.json';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/50 py-12 px-6 backdrop-blur-md">
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
        <div className="mb-8 text-2xl font-bold tracking-tighter text-white">
          AB<span className="text-indigo-500">.</span>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-6">
          <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <Mail className="h-5 w-5" />
            <span>{resumeData.basics.email}</span>
          </a>
          <a href={`tel:${resumeData.basics.phone}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <Phone className="h-5 w-5" />
            <span>{resumeData.basics.phone}</span>
          </a>
        </div>

        <div className="mb-12 flex gap-6">
          {resumeData.basics.links.map((link, i) => {
            let Icon = Globe;
            if (link.name.toLowerCase().includes('linkedin')) Icon = Linkedin;
            if (link.name.toLowerCase().includes('github')) Icon = Github;
            
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
