import { motion } from 'motion/react';

const DESIGN_SCREENS = [
  {
    id: 's1',
    title: 'Mobile App Visualization',
    image: '/input_file_3.png', // 1400x700
    category: 'UX Case Study',
    size: 'large'
  },
  {
    id: 's2',
    title: 'Interaction Model',
    image: '/input_file_4.png', // 1400x700
    category: 'Visual Design',
    size: 'large'
  },
  {
    id: 's3',
    title: 'User Flow Architecture',
    image: '/input_file_5.png', // 1400x700
    category: 'Product Strategy',
    size: 'large'
  },
  {
    id: 's4',
    title: 'Restaurant UI View',
    image: '/input_file_6.png', // Vertical (from attachment analysis)
    category: 'Interface Design',
    size: 'tall'
  },
  {
    id: 's5',
    title: 'Mobile Key Features',
    image: '/input_file_0.png', // Vertical
    category: 'Product Design',
    size: 'tall'
  },
  {
    id: 's6',
    title: 'Quickky Cover',
    image: '/input_file_1.png', // 808x632
    category: 'Presentation',
    size: 'square'
  },
  {
    id: 's7',
    title: 'MealZa Cover',
    image: '/input_file_2.png', // 808x632
    category: 'Branding',
    size: 'square'
  }
];

export function DesignGallery() {
  return (
    <section id="gallery" className="px-6 md:px-12 py-12 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[14px] font-bold text-[#7F56D9] uppercase tracking-[0.2em] mb-4 block text-center md:text-left">
              Portfolio Gallery
            </span>
            <h2 className="text-center md:text-left">
              My <span className="text-[#0A0A0B]/40">UI/UX Work.</span>
            </h2>
            <p className="text-[#667085] mt-4 text-center md:text-left text-lg max-w-xl">
              A collection of design screens and process visualizations from various projects.
            </p>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {DESIGN_SCREENS.map((screen, idx) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-[#EAECF0] bg-white transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="aspect-auto overflow-hidden">
                  <img 
                    src={screen.image} 
                    alt={screen.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#7F56D9] text-xs font-bold uppercase tracking-wider mb-2">
                    {screen.category}
                  </span>
                  <h3 className="text-white text-lg font-bold">
                    {screen.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
