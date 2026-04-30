import { motion } from 'motion/react';
import { Linkedin, Mail, Dribbble } from 'lucide-react';

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
    <footer className="px-6 md:px-12 py-12 md:py-32 bg-[#FCFCFD] border-t border-[#EAECF0] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10 max-w-6xl mx-auto">
        <div>
          <span className="text-[14px] font-bold text-[#7F56D9] uppercase tracking-[0.2em] mb-4 block">Get in Touch</span>
          <h2 className="leading-tight mb-8">Let's build something <span className="text-[#0A0A0B]/40">meaningful together.</span></h2>
          <div className="space-y-6">
            <a href="mailto:priyaamutha9191@gmail.com" className="text-[20px] md:text-[24px] font-bold text-[#0A0A0B] hover:text-[#7F56D9] transition-all flex items-center gap-3">
              <Mail className="text-[#7F56D9]" /> priyaamutha9191@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end md:justify-between h-full py-2">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/priyadharsini-v-270a383b8" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-3 bg-white border border-[#EAECF0] rounded-xl text-[#667085] hover:text-[#7F56D9] hover:border-[#D6BBFB] transition-all shadow-sm">
              <Linkedin size={20} />
            </a>
            <a href="https://www.behance.net/priyadharsiniv" target="_blank" rel="noopener noreferrer" title="Behance" className="p-3 bg-white border border-[#EAECF0] rounded-xl text-[#667085] hover:text-[#7F56D9] hover:border-[#D6BBFB] transition-all shadow-sm">
              <BehanceIcon size={20} />
            </a>
            <a href="https://dribbble.com/Priyadharsini_V" target="_blank" rel="noopener noreferrer" title="Dribbble" className="p-3 bg-white border border-[#EAECF0] rounded-xl text-[#667085] hover:text-[#7F56D9] hover:border-[#D6BBFB] transition-all shadow-sm">
              <Dribbble size={20} />
            </a>
          </div>
          
          <div className="mt-12 md:mt-0 text-[12px] font-medium text-[#667085]">
            © {new Date().getFullYear()} Priyadharsini V Portfolio.
          </div>
        </div>
      </div>
    </footer>
  );
}
