"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerItem } from '@/lib/animations';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col bg-zinc-900/50 dark:bg-surface-container backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl h-full"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                    {project.tech.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content Container */}
            <div className="p-7 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                    {project.description}
                </p>

                {/* Footer Actions */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all duration-300"
                        >
                            <i className="fa-brands fa-github text-xl"></i>
                        </motion.a>
                        {project.live && (
                            <motion.a
                                whileHover={{ scale: 1.2, y: -2 }}
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all duration-300"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square text-base"></i>
                            </motion.a>
                        )}
                    </div>
                    
                    <Link href={`/projects/${project.id}`}>
                        <motion.button
                            whileHover={{ x: 5 }}
                            className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2 group/btn"
                        >
                            Details
                            <span className="material-symbols-outlined text-lg group-hover/btn:text-primary transition-colors">arrow_forward</span>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
