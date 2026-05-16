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
            degree: "Computer Science and Technology",
            institution: "Chapainawabganj polytechnic institute",
            year: "Jan 2023 – Jan 2027",
            result: "Currently Studying"
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "HR Residential Model School and College",
            year: "2022 - 2023",
            result: "Science"
        }
    ];

    return (
        <section className="py-32 px-8 bg-transparent transition-colors duration-300" id="education">
            <div className="max-w-[1280px] mx-auto">
                <motion.div 
                    initial="initial"
                    whileInView="animate"
                    viewport={viewPortConfig}
                    variants={fadeUp}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">Studies.</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        My academic foundation in Computer Science and Engineering, providing the theoretical background for my technical skills.
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
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                                {educationData.map((edu, idx) => (
                                    <motion.div 
                                        key={idx}
                                        variants={staggerItem}
                                        whileHover={{ y: -5 }}
                                        className="bg-zinc-900/30 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5 shadow-2xl transition-all flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                                <span className="material-symbols-outlined text-4xl">school</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{edu.degree}</h3>
                                            <p className="text-primary font-semibold text-xs mb-6 uppercase tracking-[0.2em]">{edu.institution}</p>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-center pt-8 border-t border-white/5">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{edu.year}</span>
                                                <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
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
