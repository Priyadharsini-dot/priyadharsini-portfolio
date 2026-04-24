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
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-line mb-6 rounded-2xl">
        <motion.img 
          src={project.coverImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-14 h-14 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg transform group-hover:rotate-12">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start px-2">
        <div>
          <h3 className="text-2xl md:text-3xl mb-2 group-hover:text-accent-primary transition-colors">{project.title}</h3>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-secondary">{project.category}</p>
        </div>
      </div>
    </motion.div>
  );
}
