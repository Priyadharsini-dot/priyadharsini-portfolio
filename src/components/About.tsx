import { BookOpen, Palette, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-12 md:py-32 bg-white text-[#0A0A0B] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <span className="text-[14px] font-bold text-[#7F56D9] uppercase tracking-[0.2em] mb-4 block">
          About Me
        </span>
        <h2 className="leading-tight mb-12">
          A UI/UX designer focused on solving <span className="text-[#0A0A0B]/40">real user problems</span> through empathetic and thoughtful design.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          <div className="space-y-4 md:space-y-6">
            <h3 className="flex items-center gap-3 text-[#0A0A0B]"><BookOpen size={24} className="text-[#7F56D9]" /> My Approach</h3>
            <p className="text-[18px] text-[#667085] leading-relaxed">
              As a designer, I bring curiosity, adaptability, and a strong willingness to learn. I focus on understanding real user pain points and transforming them into simple, intuitive digital experiences.
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h3 className="flex items-center gap-3 text-[#0A0A0B]"><Zap size={24} className="text-[#06B6D4]" /> Growth Mindset</h3>
            <p className="text-[18px] text-[#667085] leading-relaxed">
              I continuously refine my skills in Figma, prototyping, and user research and aim to collaborate with teams where I can contribute fresh ideas while learning from experienced designers.
            </p>
          </div>
        </div>

        <div className="border-t border-[#EAECF0] pt-12 md:pt-20">
          <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-[#7F56D9]">Technical Arsenal</h4>
          <div className="flex flex-wrap gap-3">
            {['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Visual Design', 'Interaction Design', 'Adobe XD'].map((skill, i) => (
              <motion.span 
                key={skill} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-2 bg-[#F9FAFB] border border-[#EAECF0] rounded-lg text-sm font-bold text-[#344054] hover:border-[#D6BBFB] hover:bg-[#F4EBFF] transition-all cursor-default"
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
