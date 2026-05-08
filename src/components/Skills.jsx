"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewPortConfig, staggerContainer, staggerItem } from '@/lib/animations';
import { SkillsSkeleton } from './Skeleton';

const techSkills = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", isDark: true },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", isDark: true },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const TechCard = ({ name, icon, isDark }) => (
    <motion.div 
        variants={staggerItem}
        whileHover={{ 
            scale: 1.05, 
            translateY: -5,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
        }}
        className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-gray-800 border border-zinc-100 dark:border-white/5 shadow-md transition-all duration-300 overflow-hidden"
    >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 w-12 h-12 mb-4 flex items-center justify-center">
            <img 
                src={icon} 
                alt={name} 
                className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 ${isDark ? 'dark:invert' : ''}`}
                loading="lazy"
            />
        </div>
        <span className="relative z-10 font-medium text-zinc-800 dark:text-zinc-200 text-sm md:text-base">{name}</span>
    </motion.div>
);

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 400); // Reduced delay for faster feel
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <section className="py-24 px-8 bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-300" id="skills">
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
                        transition={{ duration: 0.3 }}
                        viewport={viewPortConfig}
                        className="w-full"
                    >
                        <SkillsSkeleton />
                    </motion.div>
                ) : (
                    <motion.div 
                        key="content"
                        initial="initial"
                        whileInView="animate"
                        viewport={viewPortConfig}
                        variants={staggerContainer}
                        className="max-w-[1280px] mx-auto"
                    >
                        <motion.div 
                            variants={fadeUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Technologies & Tools</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-lg max-w-2xl mx-auto">
                                I leverage a modern stack of technologies to build high-performance, 
                                scalable, and visually stunning web applications.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {techSkills.map((tech, idx) => (
                                <TechCard key={idx} {...tech} />
                            ))}
                        </div>
                        
                        <motion.div 
                            variants={fadeUp}
                            className="mt-16 text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Always learning new technologies
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;

