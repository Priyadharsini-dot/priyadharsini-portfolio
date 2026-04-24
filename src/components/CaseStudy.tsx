import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowLeft, ArrowDown } from 'lucide-react';

interface CaseStudyProps {
  project: Project;
  onBack: () => void;
}

export function CaseStudy({ project, onBack }: CaseStudyProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-brand-bg overflow-y-auto custom-scrollbar"
    >
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-[70] px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={16} /> Close Project
        </button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70vh] md:h-[80vh] w-full flex items-end px-6 md:px-12 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.coverImage} 
            alt={project.title} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <span className="font-mono text-xs text-accent-secondary mb-4 block uppercase tracking-widest font-bold">
            Project Deep Dive
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-9xl mb-6 md:mb-8 leading-[1.1] md:leading-[0.8]">{project.title}</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <p className="text-lg md:text-3xl font-light text-white/80 max-w-2xl leading-relaxed">
              {project.description}
            </p>
            <a 
              href={project.behanceLink}
              target="_blank"
              className="px-8 py-3.5 md:py-4 bg-white text-black rounded-full font-bold text-sm tracking-tighter hover:scale-105 transition-transform shrink-0 text-center w-full md:w-auto"
            >
              Full Case Study
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 md:px-12 py-16 md:py-32 bg-brand-bg relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-24 md:mb-40 relative z-10">
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent-primary mb-4 md:mb-6">Context</h4>
            <div className="space-y-4 text-base md:text-lg text-white/60 leading-relaxed font-light">
              <p>{project.overview}</p>
            </div>
          </div>
          <div className="md:col-span-1" />
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent-secondary mb-4 md:mb-6">The Challenge</h4>
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/80">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent-tertiary mb-4 md:mb-6">Impact</h4>
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/80">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Sections */}
        <div className="space-y-32 md:space-y-64 relative z-10">
          {project.sections.map((section, idx) => (
            <div key={section.id} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                <div className={idx % 2 === 0 ? "md:col-span-7 order-2" : "md:col-span-7 md:order-1"}>
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-accent-primary/5"
                  >
                    <img 
                      src={section.image} 
                      alt={section.imageAlt} 
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[4/3] md:aspect-video object-cover"
                    />
                  </motion.div>
                </div>
                <div className={idx % 2 === 0 ? "md:col-span-5 order-1" : "md:col-span-5 md:order-2"}>
                  <span className="font-mono text-xs text-accent-primary mb-3 md:mb-4 block uppercase tracking-widest font-bold">
                    Method 0{idx + 1}
                  </span>
                  <h3 className="text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">{section.title}</h3>
                  <p className="text-base md:text-xl font-light leading-relaxed text-white/60">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Next Project */}
      <footer className="py-16 md:py-32 px-6 md:px-12 text-center border-t border-brand-line bg-gradient-to-b from-brand-bg to-accent-primary/10">
        <button 
          onClick={onBack}
          className="group font-serif text-4xl md:text-9xl transition-all duration-500 text-white/20 hover:text-white"
        >
          Explore <span className="group-hover:text-accent-secondary transition-colors">More</span> <ArrowDown className="inline ml-2 md:ml-4 group-hover:translate-y-4 transition-transform duration-500" />
        </button>
      </footer>
    </motion.div>
  );
}
