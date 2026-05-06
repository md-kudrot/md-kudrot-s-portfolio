"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewPortConfig, staggerContainer, staggerItem } from '@/lib/animations';
import { SectionSkeleton } from './Skeleton';

const SkillBar = ({ name, percent, color }) => (
    <motion.div variants={staggerItem}>
        <div className="flex justify-between mb-unit-3">
            <span className="text-zinc-700 dark:text-on-surface font-bold">{name}</span>
            <span className="font-bold" style={{ color }}>{percent}%</span>
        </div>
        <div className="h-2 w-full bg-zinc-100 dark:bg-surface-variant rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${percent}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={viewPortConfig}
                className="h-full bg-gradient-to-r from-primary-fixed-dim to-secondary"
            ></motion.div>
        </div>
    </motion.div>
);

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <section className="py-unit-24 px-8 bg-white dark:bg-background transition-colors duration-300" id="skills">
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
                        className="max-w-[1280px] mx-auto"
                    >
                        <motion.div 
                            variants={fadeUp}
                            className="text-center mb-unit-16"
                        >
                            <h2 className="font-h2 text-3xl md:text-5xl text-zinc-900 dark:text-white mb-unit-4">Technologies & Skills</h2>
                            <p className="text-zinc-600 dark:text-on-surface-variant mt-unit-2 text-lg">The tools I use to bring ideas to life.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-unit-8">
                            {/* Frontend */}
                            <motion.div 
                                initial="initial"
                                whileInView="animate"
                                viewport={viewPortConfig}
                                variants={staggerContainer}
                                className="glass-card p-unit-8 rounded-3xl shadow-sm hover:shadow-xl transition-all"
                            >
                                <h3 className="font-h3 text-xl text-zinc-900 dark:text-white mb-unit-8 flex items-center gap-unit-3">
                                    <span className="material-symbols-outlined text-secondary text-3xl">window</span> Frontend
                                </h3>
                                <div className="space-y-unit-6">
                                    <SkillBar name="React" percent={95} color="#4edea3" />
                                    <SkillBar name="Next.js" percent={90} color="#4edea3" />
                                    <SkillBar name="Tailwind CSS" percent={95} color="#4edea3" />
                                </div>
                            </motion.div>

                            {/* Backend */}
                            <motion.div 
                                initial="initial"
                                whileInView="animate"
                                viewport={viewPortConfig}
                                variants={staggerContainer}
                                className="glass-card p-unit-8 rounded-3xl shadow-sm hover:shadow-xl transition-all"
                            >
                                <h3 className="font-h3 text-xl text-zinc-900 dark:text-white mb-unit-8 flex items-center gap-unit-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">database</span> Backend
                                </h3>
                                <div className="space-y-unit-6">
                                    <SkillBar name="Node.js" percent={85} color="#00dbe9" />
                                    <SkillBar name="Express" percent={80} color="#00dbe9" />
                                    <SkillBar name="MongoDB" percent={85} color="#00dbe9" />
                                </div>
                            </motion.div>

                            {/* Tools */}
                            <motion.div 
                                initial="initial"
                                whileInView="animate"
                                viewport={viewPortConfig}
                                variants={staggerContainer}
                                className="glass-card p-unit-8 rounded-3xl shadow-sm hover:shadow-xl transition-all"
                            >
                                <h3 className="font-h3 text-xl text-zinc-900 dark:text-white mb-unit-8 flex items-center gap-unit-3">
                                    <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">build</span> Tools
                                </h3>
                                <div className="space-y-unit-6">
                                    <SkillBar name="Git & GitHub" percent={90} color="#fed639" />
                                    <SkillBar name="Figma" percent={85} color="#fed639" />
                                    <SkillBar name="Postman" percent={85} color="#fed639" />
                                </div>
                            </motion.div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.7 }}
                            viewport={viewPortConfig}
                            className="flex flex-wrap justify-center gap-unit-12 mt-unit-20 grayscale hover:grayscale-0 transition-all duration-700"
                        >
                            {['html', 'css', 'javascript', 'data_object', 'layers'].map((icon, idx) => (
                                <motion.span 
                                    key={idx}
                                    whileHover={{ scale: 1.3, rotate: 10, color: "#4edea3" }}
                                    className="material-symbols-outlined text-5xl cursor-pointer text-zinc-400"
                                >
                                    {icon}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;
