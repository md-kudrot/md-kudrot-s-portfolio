"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewPortConfig } from '@/lib/animations';
import { SectionSkeleton } from './Skeleton';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <section className="py-32 px-8 bg-transparent transition-colors duration-300" id="about">
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
                        className="w-full"
                    >
                        <SectionSkeleton />
                    </motion.div>
                ) : (
                    <motion.div 
                        key="content"
                        initial="initial"
                        whileInView="animate"
                        viewport={viewPortConfig}
                        className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-24 items-center"
                    >
                        <motion.div variants={fadeUp} className="space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-8">About.</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    I’m MD Kamrujjaman Al Kudrot — a Frontend Developer focused on building clean, responsive, and user-centric web interfaces. I turn ideas into fast, interactive experiences using JavaScript, React.js, and Tailwind CSS—with code that’s readable, scalable, and team-friendly.
                                </p>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    I genuinely enjoy solving real UI problems and shipping features people actually use. I’m a daily learner who improves by building, breaking, and refining real projects.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="bg-zinc-900/30 backdrop-blur-xl p-8 rounded-3xl text-center border border-white/5 transition-all shadow-2xl"
                                >
                                    <div className="text-2xl font-bold text-primary mb-1">Daily</div>
                                    <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Learner</div>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="bg-zinc-900/30 backdrop-blur-xl p-8 rounded-3xl text-center border border-white/5 transition-all shadow-2xl"
                                >
                                    <div className="text-2xl font-bold text-secondary mb-1">Project</div>
                                    <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Focused</div>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={fadeUp} className="space-y-10">
                            <h3 className="text-2xl font-bold text-white">Qualification</h3>
                            <div className="space-y-10 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10 pl-10">
                                {[
                                    { title: "Computer Science and Technology", detail: "Chapainawabganj polytechnic institute | 2023 - 2027", color: "var(--color-primary)" },
                                    { title: "Secondary School Certificate (SSC)", detail: "HR Residential Model School and College | 2022 - 2023", color: "var(--color-secondary)" }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.2 }}
                                        viewport={viewPortConfig}
                                        className="relative"
                                    >
                                        <div 
                                            className="absolute -left-[44.5px] top-1.5 w-3 h-3 rounded-full border-2 border-[#0b1120] shadow-lg"
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: item.color }}>{item.detail}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;
