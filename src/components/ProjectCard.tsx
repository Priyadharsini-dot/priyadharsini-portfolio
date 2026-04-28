import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F9FAFB] mb-6 rounded-2xl border border-[#EAECF0] transition-all duration-500 group-hover:border-[#D6BBFB] group-hover:shadow-2xl group-hover:shadow-purple-500/5 group-hover:-translate-y-2">
        <motion.img 
          src={project.coverImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#7F56D9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
          <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[#0A0A0B] text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
            View Case Study <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
      
      <div className="px-2">
        <span className="text-[12px] font-bold text-[#7F56D9] uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
        <h3 className="text-[24px] md:text-[28px] font-bold text-[#0A0A0B] group-hover:text-[#7F56D9] transition-colors">{project.title}</h3>
        <p className="text-[16px] text-[#667085] mt-2 line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  );
}
