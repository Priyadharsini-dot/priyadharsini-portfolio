import { motion } from 'motion/react';
import { FileText, ArrowDown } from 'lucide-react';
import { RESUME_LINK } from '../constants';

export function Hero() {
  return (
    <section className="pt-32 pb-12 md:pt-60 md:pb-32 px-6 md:px-12 flex flex-col relative overflow-hidden bg-[#FCFCFD]">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[100px] opacity-60 -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40 -ml-24 -mb-24 pointer-events-none" />

      <div className="max-w-6xl relative z-10 w-full">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <span className="text-sm font-bold text-accent-primary uppercase tracking-[0.2em] mb-4 block">
              UI / UX Designer & Visual Storyteller
            </span>
            <h1 className="mb-8 max-w-4xl">
              Hi, I’m <span className="text-brand-ink">Priyadharsini V.</span> <br />
              <span className="text-brand-ink/40">I craft intuitive digital experiences that matter.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed">
              Transforming complex problems into simple, human-centric design solutions through research and intentionality.
            </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href={RESUME_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#7F56D9] text-white rounded-xl font-bold hover:bg-[#6941C6] transition-all w-full sm:w-auto"
          >
            <FileText size={20} /> View Resume
          </a>

          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 px-8 py-4 bg-white text-[#344054] border border-[#D0D5DD] rounded-xl font-bold hover:bg-[#F9FAFB] transition-all w-full sm:w-auto text-center justify-center"
          >
            Explore Projects <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
