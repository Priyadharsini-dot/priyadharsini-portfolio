import { motion } from 'motion/react';
import { DRIBBBLE_SHOTS } from '../constants';

export function DribbbleSection() {
  return (
    <section id="visuals" className="px-6 md:px-12 py-10 md:py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 gap-6 relative z-10">
        <div className="max-w-2xl">
          <span className="text-sm font-bold text-accent-primary uppercase tracking-[0.2em] mb-3 block">
            Visual Playground
          </span>
          <h2>
            Exploration in <span className="text-brand-ink/30">pixels & color.</span>
          </h2>
        </div>
      </div>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#EAECF0] bg-white transition-all group-hover:shadow-lg group-hover:-translate-y-1">
              <img 
                src={shot.image} 
                alt={shot.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-bg/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="mt-5">
              <h4 className="text-brand-ink">{shot.title}</h4>
              <p className="text-xs text-brand-muted uppercase tracking-widest mt-1">Dribbble Shot</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
