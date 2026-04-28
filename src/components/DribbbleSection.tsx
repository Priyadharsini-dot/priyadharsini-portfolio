import { motion } from 'motion/react';
import { DRIBBBLE_SHOTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export function DribbbleSection() {
  return (
    <section id="dribbble" className="px-6 md:px-12 py-12 md:py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6 md:gap-8 relative z-10">
        <div className="max-w-2xl">
          <span className="text-[14px] font-bold text-[#7F56D9] uppercase tracking-[0.2em] mb-4 block">
            Visual Playground
          </span>
          <h2 className="leading-tight">
            Explorations in <span className="text-[#0A0A0B]/40">pixels & color.</span>
          </h2>
        </div>
        <a 
          href="https://dribbble.com/Priyadharsini_V" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group text-sm font-bold text-[#7F56D9] flex items-center gap-2 hover:translate-x-1 transition-transform"
        >
          Follow on Dribbble <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {DRIBBBLE_SHOTS.map((shot, idx) => (
          <motion.a
            key={shot.id}
            href={shot.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group block"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#EAECF0] bg-white transition-all group-hover:shadow-xl group-hover:-translate-y-1">
              <img 
                src={shot.image} 
                alt={shot.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-bg/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-bold text-[#0A0A0B]">{shot.title}</h4>
              <p className="text-xs text-[#667085] uppercase tracking-wider mt-1">Dribbble Shot</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
