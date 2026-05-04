"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerItem } from '@/lib/animations';

const ProjectCard = ({ project }) => {
    return (
        <motion.div 
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="group h-full flex flex-col glass-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-zinc-100 dark:border-white/5"
        >
            {/* Project Image Section */}
            <div className="h-56 md:h-64 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50 z-10 group-hover:opacity-30 transition-opacity"></div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col flex-grow space-y-5">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-primary/10 text-cyan-700 dark:text-primary-fixed-dim text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-primary/20">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-secondary transition-colors">{project.title}</h3>
                    <p className="text-base text-zinc-600 dark:text-on-surface-variant leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between pt-6 mt-auto border-t border-zinc-100 dark:border-white/5">
                    <Link 
                        href={`/projects/${project.id}`}
                        className="px-6 py-3 bg-secondary text-on-secondary font-black text-sm rounded-xl hover:brightness-110 transition-all shadow-md active:scale-95"
                    >
                        View Details
                    </Link>
                    
                    <div className="flex items-center gap-4">
                        <motion.a 
                            href={project.live}
                            whileHover={{ y: -3, color: "#4edea3" }}
                            className="text-zinc-500 dark:text-zinc-400 transition-colors"
                            title="Live Demo"
                        >
                            <span className="material-symbols-outlined text-2xl">open_in_new</span>
                        </motion.a>
                        <motion.a 
                            href={project.github}
                            whileHover={{ y: -3, color: "#4edea3" }}
                            className="text-zinc-500 dark:text-zinc-400 transition-colors"
                            title="Source Code"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
