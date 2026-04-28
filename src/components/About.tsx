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
          A passionate <span className="text-[#0A0A0B]/40">UI/UX designer</span> focused on solving real-world problems through research and design thinking. 
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          <div className="space-y-4 md:space-y-6">
            <h3 className="flex items-center gap-3 text-[#0A0A0B]"><BookOpen size={24} className="text-[#7F56D9]" /> My Philosophy</h3>
            <p className="text-[18px] text-[#667085] leading-relaxed">
              I enjoy creating intuitive, user-friendly interfaces that solve real user problems. I believe that good design is invisible and focuses on making the user's journey as frictionless as possible.
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h3 className="flex items-center gap-3 text-[#0A0A0B]"><Zap size={24} className="text-[#06B6D4]" /> Problem Solver</h3>
            <p className="text-[18px] text-[#667085] leading-relaxed">
              By understanding real user problems, I create simple solutions that impact business goals. I am always eager to learn new technologies and methodologies to stay at the forefront of design.
            </p>
          </div>
        </div>

        <div className="border-t border-[#EAECF0] pt-12 md:pt-20 overflow-hidden">
          <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-[#7F56D9]">Skills</h4>
          <div className="relative flex overflow-x-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex whitespace-nowrap gap-4 pr-4"
            >
              {[
                'Figma', 'Prototyping', 'User Research', 'Visual Design', 
                'Interaction Design', 'Adobe XD', 'Adobe Photoshop', 'Illustrator', 
                'Webflow', 'UX Writing', 'Design Systems',
                'Figma', 'Prototyping', 'User Research', 'Visual Design', 
                'Interaction Design', 'Adobe XD', 'Adobe Photoshop', 'Illustrator', 
                'Webflow', 'UX Writing', 'Design Systems',
                'Figma', 'Prototyping', 'User Research', 'Visual Design', 
                'Interaction Design', 'Adobe XD', 'Adobe Photoshop', 'Illustrator', 
                'Webflow', 'UX Writing', 'Design Systems',
                'Figma', 'Prototyping', 'User Research', 'Visual Design', 
                'Interaction Design', 'Adobe XD', 'Adobe Photoshop', 'Illustrator', 
                'Webflow', 'UX Writing', 'Design Systems'
              ].map((skill, i) => (
                <span 
                  key={`${skill}-${i}`} 
                  className="px-8 py-4 bg-[#F9FAFB] border border-[#EAECF0] rounded-xl text-lg font-bold text-[#344054] hover:border-[#D6BBFB] hover:bg-[#F4EBFF] hover:text-[#7F56D9] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
