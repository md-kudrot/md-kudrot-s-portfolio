"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewPortConfig, staggerContainer, staggerItem } from '@/lib/animations';
import { SectionSkeleton } from './Skeleton';

const Education = () => {
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

    const educationData = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Dhaka International University",
            year: "2021 - 2025 (Expected)",
            result: "CGPA: 3.85 / 4.00"
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Govt. Science College, Dhaka",
            year: "2018 - 2020",
            result: "GPA: 5.00 / 5.00"
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "Ideal School and College, Motijheel",
            year: "2016 - 2018",
            result: "GPA: 5.00 / 5.00"
        }
    ];

    return (
        <section className="py-unit-24 px-8 bg-zinc-50 dark:bg-surface-container-low transition-colors duration-300" id="education">
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
                                <h2 className="font-h2 text-3xl md:text-5xl text-zinc-900 dark:text-white mb-4">Education</h2>
                                <p className="text-zinc-600 dark:text-on-surface-variant text-lg">My academic journey and qualifications.</p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {educationData.map((edu, idx) => (
                                    <motion.div 
                                        key={idx}
                                        variants={staggerItem}
                                        whileHover={{ y: -10 }}
                                        className="glass-card p-8 rounded-3xl border-zinc-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                                                <span className="material-symbols-outlined text-3xl">school</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{edu.degree}</h3>
                                            <p className="text-secondary font-bold text-sm mb-4 uppercase tracking-wider">{edu.institution}</p>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-center pt-6 border-t border-zinc-100 dark:border-white/5">
                                                <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">{edu.year}</span>
                                                <span className="px-3 py-1 bg-primary/10 text-cyan-700 dark:text-primary-fixed-dim text-[10px] font-black rounded-full uppercase tracking-widest border border-primary/20">
                                                    {edu.result}
                                                </span>
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

export default Education;
