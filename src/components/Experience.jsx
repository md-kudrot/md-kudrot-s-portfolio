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
            role: "Executive Member (5th Executive Committee)",
            company: "CNPI Community of Computer Science & Technology",
            duration: "Present",
            description: "I’m incredibly grateful for the opportunity to be part of this amazing community of passionate learners and future tech professionals. Shaping skills, leadership, and collaboration.",
            skills: ["Leadership", "Community", "Collaboration"]
        },
        {
            role: "Independent Project Developer",
            company: "Self-Project Showcase",
            duration: "2023 - Present",
            description: "Built and deployed multiple hands-on projects to strengthen DOM, async JavaScript, and real-world UI logic. Focused on production-ready patterns and UI consistency.",
            skills: ["JavaScript", "React.js", "Tailwind CSS", "UI Logic"]
        }
    ];

    return (
        <section className="py-32 px-8 bg-transparent transition-colors duration-300" id="experience">
            <div className="max-w-[1280px] mx-auto">
                <motion.div 
                    initial="initial"
                    whileInView="animate"
                    viewport={viewPortConfig}
                    variants={fadeUp}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">Journey.</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        My career path and professional milestones in the tech industry.
                    </p>
                </motion.div>
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
                            <div className="space-y-12 max-w-4xl mx-auto">
                                {experienceData.map((exp, idx) => (
                                    <motion.div 
                                        key={idx}
                                        variants={staggerItem}
                                        className="relative"
                                    >
                                        <div className={`flex flex-col md:flex-row items-start gap-12`}>
                                            <div className="md:w-32 pt-2 shrink-0">
                                                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{exp.duration}</span>
                                            </div>
                                            
                                            <div className="flex-grow">
                                                <motion.div 
                                                    whileHover={{ x: 5 }}
                                                    className="bg-zinc-900/30 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl transition-all"
                                                >
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                                            <p className="text-slate-500 font-semibold uppercase text-[10px] tracking-[0.2em]">{exp.company}</p>
                                                        </div>
                                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                            <span className="material-symbols-outlined text-2xl">
                                                                {exp.role.includes("Seeking") ? "person_search" : "work"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    
                                                    <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                                                        {exp.description}
                                                    </p>
                                                    
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.skills.map((skill, sIdx) => (
                                                            <span key={sIdx} className="px-4 py-1.5 bg-white/5 text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-widest border border-white/5">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
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
