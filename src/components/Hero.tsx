import { motion } from 'motion/react';
import { FileText, ArrowDown } from 'lucide-react';
import { RESUME_LINK } from '../constants';

export function Hero() {
  return (
    <section className="pt-12 pb-4 md:pt-40 md:pb-20 px-6 md:px-12 flex flex-col relative overflow-hidden">
      {/* Interactive Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-24 w-64 h-64 bg-accent-secondary/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent-secondary mb-1 md:mb-2 block">
            UI / UX Designer & Visual Storyteller
          </span>
          <h1 className="text-[2.5rem] xs:text-5xl md:text-[8vw] leading-[1.1] md:leading-[0.9] font-serif mb-4 md:mb-6 text-left">
            Transforming <span className="text-accent-primary">problems</span> <br className="hidden xs:block" />
            into <span className="italic text-accent-secondary">digital experiences</span> <br className="hidden xs:block" />
            that matter.
          </h1>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 pt-6 border-t border-white/5 items-stretch lg:items-end w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-2xl text-base md:text-xl font-light leading-relaxed text-white/40 text-justify"
          >
            I’m Priyadharsini V, a UI/UX designer crafting intuitive and empathetic digital experiences. I simplify complex user problems into elegant, high-impact design solutions.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6 md:gap-12"
          >
            <a 
              href={RESUME_LINK} 
              target="_blank"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-accent-primary text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent-primary/40 whitespace-nowrap w-full sm:w-auto"
            >
              <FileText size={20} /> View Resume
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>

            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-white/40 hover:text-white transition-all cursor-pointer"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Explore Projects</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={18} className="opacity-60" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
