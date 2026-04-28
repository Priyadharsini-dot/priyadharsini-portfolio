import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowLeft, Target, Users, Search, AlertCircle, Layout, Palette, CheckCircle, TrendingUp } from 'lucide-react';

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
          UX Case Study: {project.title}
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
            <h1 className="text-[36px] md:text-[56px] leading-tight mb-8">
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
                <span className="text-[14px] font-bold text-[#0A0A0B] block mb-1 uppercase tracking-wider">Duration</span>
                <span className="text-[#667085]">4 Weeks</span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl overflow-hidden mb-24 md:mb-32 shadow-xl"
        >
          <img 
            src={project.coverImage} 
            alt={project.title} 
            referrerPolicy="no-referrer"
            className="w-full aspect-[16/9] object-cover"
          />
        </motion.div>

        {/* Case Study Content */}
        <div className="space-y-24 md:space-y-32">
          
          {/* 1. Problem Statement */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#7F56D9]" size={24} />
                <h2 className="text-[22px] font-bold uppercase tracking-widest text-[#0A0A0B]">Problem</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[18px] leading-relaxed text-[#667085]">
                {project.problem}
              </p>
            </div>
          </section>

          {/* 2. User Research */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-[#7F56D9]" size={24} />
                <h2 className="text-[22px] font-bold uppercase tracking-widest text-[#0A0A0B]">Research</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[18px] leading-relaxed text-[#667085] mb-8">
                {project.research}
              </p>
              
              <div className="bg-[#F9FAFB] p-8 rounded-2xl border border-[#EAECF0]">
                <h3 className="text-[18px] font-bold mb-6 flex items-center gap-2">
                  <AlertCircle size={20} /> Key Pain Points
                </h3>
                <ul className="space-y-4">
                  {project.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                        {i + 1}
                      </span>
                      <span className="text-[#667085]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Persona & Journey */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#7F56D9]" size={24} />
                <h2 className="text-[22px] font-bold uppercase tracking-widest text-[#0A0A0B]">Users</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="bg-white border border-[#EAECF0] rounded-2xl p-8 mb-12 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-sm">
                <img 
                  src={project.persona.image} 
                  alt={project.persona.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#F4EBFF]"
                />
                <div>
                  <h3 className="text-[20px] font-bold mb-1">{project.persona.name}</h3>
                  <p className="text-[#7F56D9] font-medium mb-4">{project.persona.role}</p>
                  <p className="text-[#667085] mb-4 italic">"{project.persona.goal}"</p>
                  <div className="bg-[#FEF3F2] p-4 rounded-xl border border-[#FEE4E2]">
                    <span className="text-xs font-bold text-[#B42318] block mb-1 uppercase tracking-tight">Main Frustration</span>
                    <p className="text-[#B42318] text-sm">{project.persona.frustration}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-[18px] font-bold mb-4">User Journey</h3>
              <p className="text-[18px] leading-relaxed text-[#667085]">
                {project.userJourney}
              </p>
            </div>
          </section>

          {/* 6. Wireframes */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="text-[#7F56D9]" size={24} />
                <h2 className="text-[22px] font-bold uppercase tracking-widest text-[#0A0A0B]">Structure</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[18px] leading-relaxed text-[#667085] mb-8">
                {project.wireframes}
              </p>
              <div className="bg-[#101828] aspect-video rounded-2xl flex items-center justify-center text-white/20 font-bold tracking-widest text-sm uppercase p-4 text-center">
                Low-Fidelity Wireframes Visualization Block
              </div>
            </div>
          </section>

          {/* 7. UI Design */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="text-[#7F56D9]" size={24} />
                <h2 className="text-[22px] font-bold uppercase tracking-widest text-[#0A0A0B]">Visual</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[18px] leading-relaxed text-[#667085] mb-12">
                {project.uiDesign}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.sections.map((section) => (
                  <div key={section.id} className="rounded-xl overflow-hidden border border-[#EAECF0] shadow-sm bg-white">
                    <img src={section.image} alt={section.imageAlt} className="w-full aspect-[4/3] object-cover" />
                    <div className="p-6">
                      <h4 className="font-bold mb-2">{section.title}</h4>
                      <p className="text-sm text-[#667085]">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Solution */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-[#7F56D9]" size={24} />
                <h2 className="text-[22px] font-bold uppercase tracking-widest text-[#0A0A0B]">Solution</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="bg-[#F4EBFF] p-10 rounded-3xl border border-[#D6BBFB]">
                <p className="text-[20px] font-medium leading-relaxed text-[#42307D]">
                  {project.solution}
                </p>
              </div>
            </div>
          </section>

          {/* 9. Outcome */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-24">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-[#7F56D9]" size={24} />
                <h2 className="text-[22px] font-bold uppercase tracking-widest text-[#0A0A0B]">Outcome</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {project.outcome.metrics.map((metric, i) => (
                  <div key={i} className="p-6 bg-white border border-[#EAECF0] rounded-2xl shadow-sm">
                    <p className="text-[#7F56D9] text-[24px] font-bold mb-2">{metric.split(' ')[0]}</p>
                    <p className="text-[#667085] text-sm font-medium">{metric.split(' ').slice(1).join(' ')}</p>
                  </div>
                ))}
              </div>
              <p className="text-[18px] leading-relaxed text-[#667085]">
                {project.outcome.summary}
              </p>
            </div>
          </section>

        </div>
      </div>

      <footer className="bg-[#101828] py-16 md:py-24 px-6 text-center text-white">
        <h2 className="text-[24px] md:text-[36px] font-bold mb-8">Ready to start a project?</h2>
        <button 
          onClick={onBack}
          className="px-10 py-4 bg-[#7F56D9] text-white rounded-full font-bold hover:bg-[#6941C6] transition-all shadow-xl shadow-purple-500/20"
        >
          View More Work
        </button>
      </footer>
    </motion.div>
  );
}
