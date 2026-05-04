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
        <section className="py-unit-24 px-8 bg-zinc-50 dark:bg-surface-container-lowest transition-colors duration-300" id="about">
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
                        className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-unit-24 items-center"
                    >
                        <motion.div variants={fadeUp} className="space-y-unit-8">
                            <div>
                                <h2 className="font-h2 text-3xl md:text-5xl text-zinc-900 dark:text-white mb-unit-6">About Me</h2>
                                <p className="font-body-lg text-lg text-zinc-600 dark:text-on-surface-variant leading-relaxed">
                                    Passionate about bridging the gap between design and code. With 5 years of experience, I specialize in React, Tailwind, and high-fidelity UI systems.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-unit-6">
                                <motion.div 
                                    whileHover={{ y: -10, borderColor: "#4edea3" }}
                                    className="glass-card p-unit-8 rounded-3xl text-center border-transparent transition-all shadow-sm hover:shadow-xl"
                                >
                                    <div className="text-4xl font-bold text-secondary mb-1">5+</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-on-surface-variant">Years Experience</div>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ y: -10, borderColor: "#00dbe9" }}
                                    className="glass-card p-unit-8 rounded-3xl text-center border-transparent transition-all shadow-sm hover:shadow-xl"
                                >
                                    <div className="text-4xl font-bold text-primary-fixed-dim mb-1">50+</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-on-surface-variant">Projects Done</div>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={fadeUp} className="space-y-unit-8">
                            <h3 className="font-h3 text-2xl text-zinc-900 dark:text-white">Qualification</h3>
                            <div className="space-y-unit-10 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-200 dark:before:bg-outline-variant pl-unit-10">
                                {[
                                    { title: "B.S. in Computer Science", detail: "Stanford University | 2018-2022", color: "#4edea3" },
                                    { title: "Full-Stack Web Development", detail: "Meta Certification | 2023", color: "#00dbe9" }
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
                                            className="absolute -left-[45px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg"
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                        <h4 className="font-h3 text-xl font-bold text-zinc-900 dark:text-white mb-1">{item.title}</h4>
                                        <p className="font-bold text-sm" style={{ color: item.color }}>{item.detail}</p>
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
