import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

const BehanceIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.4 7H0v11h7.8c3.2 0 4.8-1.5 4.8-3.4 0-1.5-.7-2.6-2.2-3.1 1.2-.5 1.8-1.5 1.8-2.6C12.2 7.7 10.4 7 7.4 7zm-.5 3.3c.7 0 1.2.3 1.2.9 0 .6-.5 1-1.2 1H3.6V10.3h3.3zm.5 4.4c.8 0 1.3.3 1.3 1 0 .7-.5 1.1-1.3 1.1H3.6v-2.1h3.8zm11.3-4.5c-2.3 0-4.1 1.6-4.1 3.9 0 2.3 1.9 3.9 4.3 3.9 1.7 0 2.7-.6 3.4-1.3l-1.3-1c-.5.4-1 .8-1.9.8-1.2 0-2.1-.7-2.2-1.9h5.6c.1-.4.1-.7.1-1 0-2-1.8-3.4-3.9-3.4zm-.1 1.5c1 0 1.8.6 1.8 1.6h-3.6c.1-1 1-1.6 1.8-1.6zM15 8.3h6v-1.1h-6v1.1z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-4 md:py-24 border-t border-brand-line bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-tertiary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl mb-8">Let's build <br /> <span className="italic text-accent-primary">impactful products.</span></h2>
          <a href="mailto:priyaamutha9191@gmail.com" className="text-xl md:text-2xl underline underline-offset-8 decoration-accent-secondary/40 hover:decoration-accent-secondary transition-all">
            priyaamutha9191@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col md:items-end gap-12">
          <div className="flex gap-6">
            {[
              { Icon: Linkedin, url: 'https://www.linkedin.com/in/priyadharsini-v-270a383b8' },
              { Icon: BehanceIcon, url: 'https://www.behance.net/priyadharsiniv' },
              { Icon: Mail, url: 'mailto:priyaamutha9191@gmail.com' }
            ].map(({ Icon, url }, idx) => (
              <motion.a 
                key={idx}
                href={url}
                target={url.startsWith('mailto') ? undefined : "_blank"}
                whileHover={{ y: -5, color: '#8B5CF6' }}
                className="opacity-40 hover:opacity-100 transition-opacity"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          
          <div className="text-xs uppercase tracking-widest opacity-40 font-medium">
            © 2026 Priyadharsini V Design.
          </div>
        </div>
      </div>
    </footer>
  );
}
