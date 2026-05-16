"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewPortConfig, staggerContainer, staggerItem } from '@/lib/animations';
import { SkillsSkeleton } from './Skeleton';

const techSkills = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend", isDark: true },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend", isDark: true },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "tools", isDark: true },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "tools" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg", category: "tools" },
];

const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' }
];

const TechCard = ({ name, icon, isDark }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ 
            y: -5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }}
        className="group relative flex flex-col items-center justify-center p-8 rounded-[2rem] bg-zinc-900/50 dark:bg-surface-container backdrop-blur-xl border border-white/5 shadow-xl transition-all duration-300 overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 w-14 h-14 mb-6 flex items-center justify-center">
            <img 
                src={icon} 
                alt={name} 
                className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 ${isDark ? 'dark:invert' : ''}`}
                loading="lazy"
            />
        </div>
        <span className="relative z-10 font-bold text-slate-400 dark:text-slate-400 text-xs uppercase tracking-widest group-hover:text-white transition-colors">{name}</span>
    </motion.div>
);

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const filteredSkills = activeCategory === 'all' 
        ? techSkills 
        : techSkills.filter(skill => skill.category === activeCategory);

    return (
        <section className="py-32 px-8 bg-transparent transition-colors duration-300" id="skills">
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
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">Expertise.</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                                A curated list of technologies I use to build world-class digital products with focus on performance and DX.
                            </p>
                        </motion.div>

                        {/* Category Filter Tabs */}
                        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-4 mb-16 pb-4 md:pb-0 no-scrollbar">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`relative px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shrink-0 ${
                                        activeCategory === category.id
                                            ? 'text-zinc-900'
                                            : 'text-zinc-500 dark:text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {activeCategory === category.id && (
                                        <motion.div
                                            layoutId="skill-active-pill"
                                            className="absolute inset-0 bg-white rounded-full shadow-2xl"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category.label}</span>
                                </button>
                            ))}
                        </div>

                        <motion.div 
                            layout
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredSkills.map((tech) => (
                                    <TechCard key={tech.name} {...tech} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                        
                        <motion.div 
                            variants={fadeUp}
                            className="mt-16 text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
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

