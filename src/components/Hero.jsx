"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scaleIn, staggerContainer, staggerItem } from '@/lib/animations';
import { HeroSkeleton } from './Skeleton';
import { useSkeleton } from '@/hooks/useSkeleton';

const Hero = () => {
    const isLoading = useSkeleton(1000); // Hero gets a slightly longer initial delay

    return (
        <section className="pt-unit-24 pb-unit-16 px-8 min-h-screen flex items-center overflow-hidden bg-white dark:bg-background transition-colors duration-300" id="home">
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div 
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full"
                    >
                        <HeroSkeleton />
                    </motion.div>
                ) : (
                    <motion.div 
                        key="content"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-unit-16 items-center"
                    >
                        <div className="space-y-unit-6 text-center md:text-left">
                            <motion.span 
                                variants={staggerItem}
                                className="text-secondary font-label-caps tracking-widest text-label-caps uppercase inline-block font-bold"
                            >
                                FRONTEND DEVELOPER & UI ARCHITECT
                            </motion.span>
                            <motion.h1 
                                variants={staggerItem}
                                className="font-h1 text-4xl md:text-7xl text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
                            >
                                MD Kamrujjaman Al Kudrot
                            </motion.h1>
                            <motion.p 
                                variants={staggerItem}
                                className="font-body-lg text-lg md:text-xl text-zinc-600 dark:text-on-surface-variant max-w-xl mx-auto md:mx-0"
                            >
                                I build high-performance, accessible, and visually stunning web experiences using modern technologies.
                            </motion.p>
                            <motion.div 
                                variants={staggerItem}
                                className="flex flex-wrap justify-center md:justify-start gap-unit-4 pt-unit-4"
                            >
                                <motion.button 
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open('#', '_blank')}
                                    className="px-unit-8 py-unit-4 bg-primary-container text-on-primary-container font-black rounded-full hover:brightness-110 transition-all shadow-lg flex items-center gap-2"
                                >
                                    Download Resume <span className="material-symbols-outlined">download</span>
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-unit-8 py-unit-4 border border-zinc-200 dark:border-outline-variant text-zinc-900 dark:text-on-surface font-black rounded-full transition-all"
                                >
                                    View Projects
                                </motion.button>
                            </motion.div>
                            <motion.div 
                                variants={staggerItem}
                                className="flex justify-center md:justify-start gap-unit-6 pt-unit-8"
                            >
                                {[
                                    { icon: 'github', url: 'https://github.com/Kudrot-E-Elahi' },
                                    { icon: 'linkedin', url: 'https://linkedin.com/in/md-kamrujjaman-al-kudrot' },
                                    { icon: 'twitter', url: '#' },
                                    { icon: 'facebook', url: '#' }
                                ].map((social) => (
                                    <motion.a 
                                        key={social.icon}
                                        whileHover={{ y: -5, color: "#4edea3" }}
                                        className="text-zinc-400 dark:text-zinc-500 hover:text-secondary transition-colors" 
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={`fa-brands fa-${social.icon} text-2xl`}></i>
                                        {/* Fallback to material symbols if font-awesome is not loaded */}
                                        <span className="sr-only">{social.icon}</span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>

                        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[600px] w-full overflow-visible">
                            {/* Orbital Arcs Container */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="relative w-full h-full flex items-center justify-center"
                                >
                                    <div className="absolute w-[340px] h-[340px] md:w-[500px] md:h-[500px] border border-dashed border-zinc-200 dark:border-white/10 rounded-full animate-orbit-slow arc-mask z-0"></div>
                                    <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] border border-dashed border-zinc-300 dark:border-white/20 rounded-full animate-orbit-reverse arc-mask z-20"></div>
                                </motion.div>
                            </div>

                            {/* Central Profile Image */}
                            <motion.div 
                                variants={scaleIn}
                                className="relative z-10"
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-40 h-40 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-tr from-primary-container to-secondary shadow-2xl overflow-hidden"
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900 p-1">
                                        <img 
                                            alt="MD Kamrujjaman Al Kudrot" 
                                            className="w-full h-full object-cover rounded-full grayscale-0 hover:grayscale transition-all duration-700 cursor-pointer" 
                                            src="https://avatars.githubusercontent.com/u/197643931?s=400&u=c8bfe64335ee0c79146721c8b65951e0374a3d52&v=4"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Floating Icons */}
                            <div className="absolute inset-0 z-30 pointer-events-none">
                                {[
                                    { icon: 'deployed_code', label: 'REACT', color: '#00dbe9', pos: 'top-[10%] left-[15%]' },
                                    { icon: 'terminal', label: 'GIT', color: '#4edea3', pos: 'bottom-[15%] left-[5%]', rotate: 15 },
                                    { icon: 'share', label: 'CONNECT', color: '#fed639', pos: 'top-[20%] right-[10%]', rotate: -10 },
                                    { icon: 'layers', label: 'UI/UX', color: '#00dbe9', pos: 'bottom-[20%] right-[15%]' },
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 + idx * 0.1, duration: 0.8 }}
                                        className={`absolute ${item.pos} pointer-events-auto`}
                                    >
                                        <motion.div 
                                            animate={{ 
                                                y: [0, -15, 0],
                                                rotate: [item.rotate || 0, (item.rotate || 0) + 5, item.rotate || 0]
                                            }}
                                            transition={{ 
                                                duration: 4, 
                                                repeat: Infinity, 
                                                ease: "easeInOut",
                                                delay: idx * 0.5
                                            }}
                                            className="glass-card p-3 rounded-2xl border-primary/30 hover:scale-125 transition-all cursor-help group relative shadow-lg"
                                            style={{ borderColor: `${item.color}44` }}
                                        >
                                            <span className="material-symbols-outlined text-3xl" style={{ color: item.color }}>{item.icon}</span>
                                            <span 
                                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                                                style={{ color: item.color }}
                                            >
                                                {item.label}
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
