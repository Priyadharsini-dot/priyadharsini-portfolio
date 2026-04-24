import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { CaseStudy } from './components/CaseStudy';
import { About } from './components/About';
import { DribbbleSection } from './components/DribbbleSection';
import { Footer } from './components/Footer';
import { PROJECTS } from './constants';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleHomeClick = useCallback(() => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAboutClick = useCallback(() => {
    setSelectedProject(null);
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-ink selection:bg-white selection:text-black">
      <Navbar 
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
      />
      
      <Hero />

      <section id="work" className="px-6 md:px-12 pt-1 pb-8 md:py-24 relative">
        <div className="max-w-4xl mb-3 md:mb-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold mb-1 md:mb-2 block text-accent-primary">
              Empathetic Solutions
            </span>
            <h2 className="text-3xl md:text-7xl font-serif leading-tight">
              Solving problems through <br className="hidden md:block" />
              <span className="italic text-accent-secondary">user-centric design.</span>
            </h2>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-24">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <DribbbleSection />

      <About />
      
      <Footer />
      
      <AnimatePresence>
        {selectedProject && (
          <CaseStudy 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}

