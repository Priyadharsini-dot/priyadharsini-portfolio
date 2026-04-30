import { motion } from 'motion/react';

const VISUALS = [
  {
    id: 'v1',
    title: 'Smart Home App UI',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Mobile App',
    size: 'wide'
  },
  {
    id: 'v2',
    title: 'Ecommerce Platform',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'UI Design',
    size: 'wide'
  },
  {
    id: 'v3',
    title: 'Glasses Store Experience',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Visual Design',
    size: 'wide'
  },
  {
    id: 'v4',
    title: 'Flight Booking Flow',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'UX Pattern',
    size: 'tall'
  },
  {
    id: 'v5',
    title: 'Cafe Kiosk Interface',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Product Design',
    size: 'tall'
  },
  {
    id: 'v6',
    title: 'Television System UI',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Interaction',
    size: 'square'
  },
  {
    id: 'v7',
    title: 'Wellness Tracker',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'App Design',
    size: 'square'
  }
];

const VISUAL_FALLBACKS: Record<string, string> = {
  v1: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
  v2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  v3: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  v4: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
  v5: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
  v6: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800',
  v7: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=800',
};

export function DesignGallery() {
  return (
    <section id="visuals" className="px-6 md:px-12 py-20 md:py-40 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[12px] font-bold text-[#7F56D9] uppercase tracking-[0.3em] mb-4 block">
              Design Lab
            </span>
            <h2 className="text-white">
              Visual <span className="text-white/40">Explorations.</span>
            </h2>
            <p className="text-white/50 mt-6 text-lg max-w-xl">
              A curated selection of interfaces, design systems, and digital experiments. Focused on high-fidelity execution and brand harmony.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {VISUALS.map((visual, idx) => (
            <motion.div
              key={visual.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 
                ${visual.size === 'wide' ? 'md:col-span-8' : visual.size === 'tall' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-4'}
              `}
            >
              <img 
                src={visual.image} 
                alt={visual.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = VISUAL_FALLBACKS[visual.id];
                }}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <span className="text-[#7F56D9] text-xs font-bold uppercase tracking-widest mb-2 block">
                  {visual.category}
                </span>
                <h3 className="text-white text-xl font-bold">
                  {visual.title}
                </h3>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                 <div className="w-2 h-2 rounded-full bg-[#7F56D9]" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/30 text-sm font-medium italic"
            >
              More experiments arriving soon...
            </motion.p>
        </div>
      </div>
    </section>
  );
}
