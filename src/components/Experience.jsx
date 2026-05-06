"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewPortConfig, staggerContainer, staggerItem } from '@/lib/animations';
import { SectionSkeleton } from './Skeleton';

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const experienceData = [
        {
            role: "Frontend Developer (Freelance)",
            company: "Self-Employed",
            duration: "2023 - Present",
            description: "Building high-performance, accessible, and visually stunning web experiences using React, Next.js, and Tailwind CSS. Collaborating with international clients to deliver production-grade applications.",
            skills: ["React", "Next.js", "Tailwind", "Framer Motion"]
        },
        {
            role: "Currently Seeking Opportunities",
            company: "Open for Full-time Roles",
            duration: "Present",
            description: "Actively looking for a challenging role in a forward-thinking company where I can apply my skills in UI/UX architecture and modern frontend development.",
            skills: ["Remote", "Hybrid", "On-site"]
        }
    ];

    return (
        <section className="py-unit-24 px-8 bg-white dark:bg-background transition-colors duration-300" id="experience">
            <div className="max-w-[1280px] mx-auto">
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div 
                            key="skeleton"
                            initial={{ opacity: 0 }}
                            whileInView={() => {
                                setIsVisible(true);
                                return { opacity: 1 };
                            }}
                            exit={{ opacity: 0 }}
                            viewport={viewPortConfig}
                        >
                            <SectionSkeleton />
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="content"
                            initial="initial"
                            whileInView="animate"
                            viewport={viewPortConfig}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeUp} className="text-center mb-16">
                                <h2 className="font-h2 text-3xl md:text-5xl text-zinc-900 dark:text-white mb-4">Professional Experience</h2>
                                <p className="text-zinc-600 dark:text-on-surface-variant text-lg">My career path and professional milestones.</p>
                            </motion.div>

                            <div className="space-y-8 max-w-4xl mx-auto">
                                {experienceData.map((exp, idx) => (
                                    <motion.div 
                                        key={idx}
                                        variants={staggerItem}
                                        className="relative pl-8 md:pl-0"
                                    >
                                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-white/10"></div>
                                        
                                        <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                            <div className="flex-1 w-full">
                                                <motion.div 
                                                    whileHover={{ x: idx % 2 === 0 ? 10 : -10 }}
                                                    className={`glass-card p-8 rounded-3xl border-zinc-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                                >
                                                    <span className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-2 block">{exp.duration}</span>
                                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{exp.role}</h3>
                                                    <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-4">{exp.company}</p>
                                                    <p className="text-zinc-600 dark:text-on-surface-variant leading-relaxed mb-6">
                                                        {exp.description}
                                                    </p>
                                                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                        {exp.skills.map((skill, sIdx) => (
                                                            <span key={sIdx} className="px-3 py-1 bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-zinc-200 dark:border-white/10">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
                                            
                                            <div className="relative z-10 w-12 h-12 rounded-full bg-secondary shadow-lg shadow-secondary/20 flex items-center justify-center border-4 border-white dark:border-zinc-900 shrink-0">
                                                <span className="material-symbols-outlined text-white text-xl">
                                                    {exp.role.includes("Seeking") ? "person_search" : "work"}
                                                </span>
                                            </div>
                                            
                                            <div className="flex-1 hidden md:block"></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Experience;
