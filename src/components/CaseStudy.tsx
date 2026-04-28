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
      className="fixed inset-0 z-[60] bg-[#FCFCFD] text-[#0A0A0B] overflow-y-auto custom-scrollbar"
    >
      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full z-[70] px-4 py-6 md:px-12 md:py-8 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-[#EAECF0]">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-[#667085] hover:text-[#0A0A0B] transition-colors"
        >
          <ArrowLeft size={18} /> Back to Portfolio
        </button>
        <span className="hidden md:block text-xs uppercase tracking-[0.2em] font-bold text-[#667085]">
          Case Study: {project.title}
        </span>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Title Section */}
        <header className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-[14px] font-semibold text-[#7F56D9] uppercase tracking-[0.1em] mb-4 block">
              {project.category}
            </span>
            <h1 className="text-[36px] md:text-[56px] font-bold leading-tight mb-8">
              {project.title}
            </h1>
            <p className="text-[18px] md:text-[22px] text-[#667085] leading-relaxed max-w-3xl mb-12">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[#EAECF0]">
              <div>
                <span className="text-[14px] font-bold text-[#0A0A0B] block mb-1 uppercase tracking-wider">My Role</span>
                <span className="text-[#667085]">{project.myRole}</span>
              </div>
              <div>
                <span className="text-[14px] font-bold text-[#0A0A0B] block mb-1 uppercase tracking-wider">Target Users</span>
                <span className="text-[#667085]">{project.targetUsers}</span>
              </div>
              <div>
                <span className="text-[14px] font-bold text-[#0A0A0B] block mb-1 uppercase tracking-wider">Project Scope</span>
                <span className="text-[#667085]">End-to-end UX/UI</span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden mb-24 md:mb-32 shadow-xl border border-[#EAECF0]"
        >
          <img 
            src={project.coverImage} 
            alt={project.title} 
            referrerPolicy="no-referrer"
            className="w-full aspect-[16/9] object-cover"
          />
        </motion.div>

        {/* Case Study Content */}
        <div className="space-y-24 md:space-y-40">
          
          {/* 1. Overview & Context */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#7F56D9]" size={24} />
                <h2 className="text-[20px] font-bold uppercase tracking-widest text-[#0A0A0B]">Context</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[24px] font-bold text-[#0A0A0B] mb-6 leading-tight">
                {project.overview}
              </p>
              <p className="text-[18px] leading-relaxed text-[#667085]">
                {project.context}
              </p>
            </div>
          </section>

          {/* 2. Problem & Pain Points */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="text-[#7F56D9]" size={24} />
                <h2 className="text-[20px] font-bold uppercase tracking-widest text-[#0A0A0B]">Problem</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[24px] font-bold text-[#0A0A0B] mb-10 leading-tight">
                {project.problem}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.painPoints.map((point, idx) => (
                  <div key={idx} className="p-6 bg-[#FEF3F2] border border-[#FEE4E2] rounded-2xl flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FECDCA] text-[#D92D20] flex items-center justify-center shrink-0 text-xs font-bold mt-1">!</div>
                    <p className="text-[#344054] font-medium leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Research */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-[#7F56D9]" size={24} />
                <h2 className="text-[20px] font-bold uppercase tracking-widest text-[#0A0A0B]">Research</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[18px] leading-relaxed text-[#667085]">
                {project.research}
              </p>
            </div>
          </section>

          {/* 4. Refinement */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-[#FDB022]" size={24} />
                <h2 className="text-[20px] font-bold uppercase tracking-widest text-[#0A0A0B]">Refinement</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="p-8 bg-[#FFFAEB] border border-[#FEDF89] rounded-2xl">
                <h4 className="text-[#B54708] text-xs font-bold uppercase tracking-widest mb-3">Key Design Iteration</h4>
                <p className="text-[18px] leading-relaxed text-[#0A0A0B] font-medium italic">
                  "{project.iterations}"
                </p>
              </div>
            </div>
          </section>

          {/* 5. User Flow */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="text-[#7F56D9]" size={24} />
                <h2 className="text-[20px] font-bold uppercase tracking-widest text-[#0A0A0B]">User Flow</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="p-8 bg-[#F9FAFB] border border-[#EAECF0] rounded-2xl">
                <p className="text-[18px] leading-relaxed text-[#0A0A0B] font-medium tracking-wide">
                  {project.userFlow}
                </p>
              </div>
            </div>
          </section>

          {/* 6. The Solution */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-[#039855]" size={24} />
                <h2 className="text-[20px] font-bold uppercase tracking-widest text-[#0A0A0B]">Solution</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[24px] font-bold text-[#0A0A0B] leading-tight">
                {project.solution}
              </p>
            </div>
          </section>

          {/* 7. Visual Solution */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="text-[#7F56D9]" size={24} />
                <h2 className="text-[20px] font-bold uppercase tracking-widest text-[#0A0A0B]">Visual Design</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-20">
                {(project.finalUiImages || []).map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(16,24,40,0.14)] border border-[#EAECF0]"
                  >
                    <img src={img} alt="Final UI Screen" className="w-full object-cover" />
                  </motion.div>
                ))}
              </div>

              {/* Behance Link */}
              <div className="flex justify-center mt-32">
                <a 
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-[#0A0A0B] text-white px-10 py-6 rounded-2xl text-[18px] font-bold hover:bg-[#7F56D9] transition-all transform hover:-translate-y-2 shadow-2xl shadow-purple-500/20"
                >
                  View Full Case Study on Behance
                  <ExternalLink size={22} className="group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* 8. Impact & Metrics */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-32">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-[#039855]" size={24} />
                <h2 className="text-[20px] font-bold uppercase tracking-widest text-[#0A0A0B]">Impact</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {project.outcome.metrics.map((metric, idx) => (
                  <div key={idx} className="p-8 bg-white border border-[#EAECF0] rounded-2xl shadow-sm hover:border-[#D6BBFB] transition-colors text-center">
                    <span className="text-[32px] font-bold text-[#7F56D9] block mb-2">{metric.split(' ')[0]}</span>
                    <span className="text-[12px] font-bold text-[#667085] uppercase tracking-widest leading-tight block">
                      {metric.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[20px] leading-relaxed text-[#475467] italic font-medium p-8 bg-[#F9FAFB] rounded-2xl border-l-4 border-[#7F56D9]">
                "{project.outcome.summary}"
              </p>
            </div>
          </section>

        </div>
      </div>

      <footer className="bg-[#101828] py-24 px-6 text-center text-white">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-10 max-w-2xl mx-auto">Like what you see? Let's build something epic.</h2>
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
