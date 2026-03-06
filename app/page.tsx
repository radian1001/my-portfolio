'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AnimatedBackground from '@/components/AnimatedBackground';
import SplashScreen from '@/components/SplashScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="relative min-h-screen bg-transparent text-slate-50 selection:bg-indigo-500/30">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <div key="content" className="relative z-10">
            <Navigation />
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
