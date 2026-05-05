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

      <section id="work" className="px-6 md:px-12 pt-1 pb-8 md:py-32 relative bg-white">
        <div className="max-w-4xl mb-12 md:mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-sm font-bold text-accent-primary uppercase tracking-[0.2em] mb-4 block">
              Case Studies
            </span>
            <h2>
              Solving problems through <br className="hidden md:block" />
              <span className="text-brand-ink/30">user-centric intentionality.</span>
            </h2>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
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

