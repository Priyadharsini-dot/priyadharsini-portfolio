import { motion } from 'motion/react';
import { DRIBBBLE_SHOTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export function DribbbleSection() {
  return (
    <section id="dribbble" className="px-6 md:px-12 py-4 md:py-24 bg-brand-bg relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 md:mb-8 gap-6 md:gap-8 relative z-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.4em] font-semibold mb-1 md:mb-2 block text-accent-tertiary">
            Visual Playground
          </span>
          <h2 className="text-3xl md:text-6xl font-serif">
            Explorations in <span className="italic text-accent-primary">pixels & color.</span>
          </h2>
        </div>
        <a 
          href="https://dribbble.com/Priyadharsini_V" 
          target="_blank" 
          className="group text-sm font-medium border-b border-accent-secondary/30 pb-1 hover:border-accent-secondary transition-all flex items-center gap-2 text-accent-secondary"
        >
          Visit Dribbble <ExternalLink size={14} className="group-hover:rotate-45 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {DRIBBBLE_SHOTS.map((shot, idx) => (
          <motion.a
            key={shot.id}
            href={shot.link}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-line"
          >
            <img 
              src={shot.image} 
              alt={shot.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/80 via-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-sm font-semibold tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform text-white">
                {shot.title}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
