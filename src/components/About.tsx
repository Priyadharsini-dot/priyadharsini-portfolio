import { BookOpen, Palette, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-4 md:py-24 bg-brand-bg text-brand-ink flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.4em] font-semibold mb-2 md:mb-4 block opacity-40">
          About Me
        </span>
        <h2 className="text-3xl md:text-[5vw] leading-[1.2] md:leading-[1.1] mb-4 md:mb-8 font-medium">
          A UI/UX designer focused on solving <span className="text-accent-primary">real user problems</span> through empathetic and thoughtful design.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-24">
          <div className="space-y-4 md:space-y-6">
            <h4 className="font-serif text-xl md:text-2xl flex items-center gap-3 text-accent-primary"><BookOpen size={24} className="opacity-60" /> My Approach</h4>
            <p className="text-base md:text-lg opacity-80 leading-relaxed text-white/70">
              As a designer, I bring curiosity, adaptability, and a strong willingness to learn. I focus on understanding real user pain points and transforming them into simple, intuitive digital experiences.
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h4 className="font-serif text-xl md:text-2xl flex items-center gap-3 text-accent-secondary"><Zap size={24} className="opacity-60" /> Growth Mindset</h4>
            <p className="text-base md:text-lg opacity-80 leading-relaxed text-white/70">
              I continuously refine my skills in Figma, prototyping, and user research and aim to collaborate with teams where I can contribute fresh ideas while learning from experienced designers.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 md:pt-16">
          <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-6 md:mb-8 text-accent-tertiary">Technical Skills</h4>
          <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm font-medium">
            {['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Visual Design', 'Interaction Design', 'Adobe Creative Suite'].map((skill, i) => (
              <motion.span 
                key={skill} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: '#8B5CF6' }}
                className="px-4 py-1.5 md:px-6 md:py-2 border border-white/10 rounded-full cursor-default transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
