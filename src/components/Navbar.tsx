import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

import { RESUME_LINK } from '../constants';

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
}

export function Navbar({ onHomeClick, onAboutClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 transition-all duration-300 flex justify-between items-center ${
          scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-[#EAECF0]' : 'bg-transparent py-8 md:py-12'
        }`}
      >
        <button 
          onClick={onHomeClick}
          className="font-bold text-[20px] tracking-tight hover:text-[#7F56D9] transition-colors"
        >
          Priyadharsini V<span className="text-[#7F56D9]">.</span>
        </button>
        
        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] rounded-full border border-[#EAECF0] shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#667085]">
              Available for projects
            </span>
          </div>
          
          <div className="flex items-center gap-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.external ? (
                  <a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#667085] hover:text-[#7F56D9] transition-all"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button 
                    key={link.name}
                    onClick={() => handleNavLinkClick(link)}
                    className="text-sm font-bold text-[#667085] hover:text-[#7F56D9] transition-all"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-[#667085] hover:text-[#0A0A0B] transition-colors p-2"
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
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center p-6 md:hidden"
          >
            <div className="flex flex-col gap-10 text-center relative z-10 w-full px-12">
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
                      rel="noopener noreferrer"
                      className="text-4xl font-bold text-[#0A0A0B] hover:text-[#7F56D9] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button 
                      onClick={() => handleNavLinkClick(link)}
                      className="text-4xl font-bold text-[#0A0A0B] hover:text-[#7F56D9] transition-colors"
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
               className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] text-[#667085] font-bold"
            >
              Priyadharsini V Portfolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
