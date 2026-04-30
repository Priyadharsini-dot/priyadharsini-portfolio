import { motion } from 'motion/react';
import { Project } from '../types';
import { 
  ArrowLeft, Target, Users, Search, AlertCircle, Layout, 
  Palette, CheckCircle, TrendingUp, Zap, HelpCircle, ExternalLink 
} from 'lucide-react';

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
      className="fixed inset-0 z-[60] bg-brand-bg text-brand-ink overflow-y-auto custom-scrollbar"
    >
      {/* Navbar - Matched with main navbar scrolled state */}
      <nav className="sticky top-0 left-0 w-full z-[70] px-6 py-4 md:px-12 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-brand-line">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-brand-muted hover:text-accent-primary transition-colors"
        >
          <ArrowLeft size={18} /> Back to Work
        </button>
        <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">
          Priyadharsini V <span className="mx-2 text-brand-line">|</span> Case Study
        </span>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-32">
        {/* Title Section */}
        <header className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-sm font-bold text-accent-primary uppercase tracking-[0.2em] mb-6 block">
              {project.category}
            </span>
            <h1 className="mb-10 max-w-4xl leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted leading-relaxed max-w-3xl mb-16">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-brand-line">
              <div className="space-y-2">
                <h4 className="uppercase">My Role</h4>
                <p className="text-lg text-brand-ink font-medium">{project.myRole}</p>
              </div>
              <div className="space-y-2">
                <h4 className="uppercase">Target Users</h4>
                <p className="text-lg text-brand-ink font-medium">{project.targetUsers}</p>
              </div>
              <div className="space-y-2">
                <h4 className="uppercase">Scope</h4>
                <p className="text-lg text-brand-ink font-medium">End-to-end UX/UI Design</p>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Case Study Content */}
        <div className="space-y-24 md:space-y-40">
          
          {/* 1. Overview & Context */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-accent-primary" size={20} />
                <h4 className="text-brand-ink uppercase">Overview</h4>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl font-medium text-brand-ink mb-8 leading-relaxed">
                {project.overview}
              </p>
              <div className="space-y-6">
                <div className="bg-white p-10 rounded-3xl border border-brand-line shadow-sm">
                  <h4 className="mb-4 text-brand-ink uppercase">Context</h4>
                  <p className="text-lg leading-relaxed">
                    {project.context}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Problem & Pain Points */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-accent-primary" size={20} />
                <h4 className="text-brand-ink uppercase">Problem</h4>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="p-8 bg-[#FFF1F0] border-l-4 border-[#D92D20] rounded-r-2xl mb-10">
                <p className="text-xl font-medium text-brand-ink leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.painPoints.map((point) => (
                  <div key={point} className="p-6 bg-[#FEF3F2] border border-[#FEE4E2] rounded-2xl flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FECDCA] text-[#D92D20] flex items-center justify-center shrink-0 text-xs font-bold mt-1 tracking-tighter">!</div>
                    <p className="text-[#344054] font-medium leading-relaxed text-base">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Research */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-accent-primary" size={20} />
                <h4 className="text-brand-ink uppercase">Research</h4>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="prose prose-lg text-brand-muted max-w-none">
                <p className="text-lg leading-relaxed">
                  {project.research}
                </p>
              </div>
            </div>
          </section>

          {/* 4. The Solution */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-accent-primary" size={20} />
                <h4 className="text-brand-ink uppercase">Solution</h4>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="p-8 bg-[#F6FEF9] border-l-4 border-[#079455] rounded-r-2xl">
                <p className="text-xl font-medium text-brand-ink leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </section>

          {/* 7. Behance CTA - Refined & Professional */}
          <div className="pt-24 border-t border-brand-line text-center max-w-2xl mx-auto">
            <h2 className="mb-4">View Full Case Study</h2>
            <p className="text-lg mb-10">
              Discover the complete design system, user flows, and additional screens for {project.title} on Behance.
            </p>
            <a 
              href={project.behanceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-brand-ink text-white px-10 py-5 rounded-full text-base font-bold hover:bg-accent-primary transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Explore on Behance
              <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      <footer className="bg-[#101828] py-24 px-6 text-center text-white">
        <h2 className="text-white mb-10 max-w-2xl mx-auto">Like what you see? Let's build something epic.</h2>
        <button 
          onClick={onBack}
          className="px-12 py-5 bg-[#7F56D9] text-white rounded-2xl font-bold text-lg hover:bg-[#6941C6] transition-all shadow-2xl shadow-purple-500/30"
        >
          Explore More Work
        </button>
      </footer>
    </motion.div>
  );
}
