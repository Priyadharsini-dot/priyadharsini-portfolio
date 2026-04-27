import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

import { RESUME_LINK } from '../constants';

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
}

export function Navbar({ onHomeClick, onAboutClick }: NavbarProps) {
  const [showResume, setShowResume] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowResume(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'Visuals', id: 'dribbble' },
    { name: 'About', action: onAboutClick },
    { name: 'Resume', href: RESUME_LINK, external: true }
  ];

  const handleNavLinkClick = (link: any) => {
    setIsMenuOpen(false);
    if (link.id) {
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
    } else if (link.action) {
      link.action();
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 px-4 py-6 md:px-12 md:py-10 flex justify-between items-center bg-gradient-to-b from-brand-bg/80 to-transparent backdrop-blur-sm"
      >
        <button 
          onClick={onHomeClick}
          className="group relative font-serif text-xl xs:text-2xl md:text-2xl tracking-tighter hover:text-accent-primary transition-colors whitespace-nowrap"
        >
          Priyadharsini V<span className="text-accent-secondary group-hover:text-accent-tertiary">.</span>
          <div className="absolute -inset-2 bg-accent-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-10">
          <div className="flex items-center gap-1 md:gap-2 px-1.5 md:px-4 py-1 md:py-2 bg-white/5 rounded-full border border-white/10 shrink-0">
            <div className="w-1 h-1 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[7px] md:text-[10px] uppercase tracking-widest font-bold text-white/40 whitespace-nowrap">
              <span className="hidden sm:inline">Available for work</span>
              <span className="sm:hidden">Available</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6 md:gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <button 
                  key={link.name}
                  onClick={() => handleNavLinkClick(link)}
                  className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 hover:text-accent-primary transition-all hover:tracking-[0.3em]"
                >
                  {link.name}
                </button>
              ))}

              <AnimatePresence>
                {showResume && (
                  <motion.a 
                    href={navLinks[3].href}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 hover:text-accent-primary transition-all hover:tracking-[0.3em]"
                  >
                    Resume
                  </motion.a>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white/60 hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col items-center justify-center p-6 md:hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col gap-6 text-center relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      className="text-xl font-serif text-white/80 hover:text-accent-primary transition-colors italic"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button 
                      onClick={() => handleNavLinkClick(link)}
                      className="text-xl font-serif text-white/80 hover:text-accent-primary transition-colors italic"
                    >
                      {link.name}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="mt-12 text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold"
            >
              Priyadharsini V Portfolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
