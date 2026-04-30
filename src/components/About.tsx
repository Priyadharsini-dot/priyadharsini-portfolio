import { BookOpen, Palette, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-12 md:py-32 bg-white text-brand-ink flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-bold text-accent-primary uppercase tracking-[0.2em] mb-4 block">
          About Me
        </span>
        <h2 className="mb-12">
          A passionate <span className="text-brand-ink/40">UI/UX designer</span> focused on solving real-world problems through research and design thinking. 
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          <div className="space-y-4 md:space-y-6">
            <h3 className="flex items-center gap-3"><BookOpen size={20} className="text-accent-primary" /> Design Philosophy</h3>
            <p className="text-brand-muted leading-relaxed">
              Focused on creating intuitive, user-friendly experiences that solve real problems. Good design remains invisible by reducing friction and making user journeys seamless.
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h3 className="flex items-center gap-3"><Zap size={20} className="text-brand-ink/40" /> Approach</h3>
            <p className="text-brand-muted leading-relaxed">
              Creates simple, effective solutions by understanding user needs and aligning them with business goals, while continuously learning and adapting to new tools and methodologies.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-line pt-12 md:pt-20">
          <h4 className="mb-12">Skills & Tools</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Interaction Skills */}
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-primary border-b border-brand-line pb-4">Interaction</h5>
              <ul className="space-y-3">
                {['User Research', 'Persona Creation', 'User Flows', 'Information Architecture', 'Usability Testing'].map((skill) => (
                  <li key={skill} className="group cursor-default">
                    <span className="text-lg text-brand-ink/70 group-hover:text-accent-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-accent-primary transition-all duration-300" />
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Skills */}
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-primary border-b border-brand-line pb-4">Visual</h5>
              <ul className="space-y-3">
                {['Sketching', 'Wireframing', 'UI Design', 'Prototyping'].map((skill) => (
                  <li key={skill} className="group cursor-default">
                    <span className="text-lg text-brand-ink/70 group-hover:text-accent-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-accent-primary transition-all duration-300" />
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-primary border-b border-brand-line pb-4">Tools</h5>
              <ul className="space-y-3">
                {['Figma', 'FigJam', 'Photoshop', 'Framer', 'Miro', 'Maze', 'Google AI Studio'].map((tool) => (
                  <li key={tool} className="group cursor-default">
                    <span className="text-lg text-brand-ink/70 group-hover:text-accent-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-accent-primary transition-all duration-300" />
                      {tool}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
