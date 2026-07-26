"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { HeroSkeleton } from './Skeleton';
import { useSkeleton } from '@/hooks/useSkeleton';

const Hero = () => {
    const isLoading = useSkeleton(600);

    return (
        <section className="relative pt-32 pb-20 px-8 min-h-screen flex items-center overflow-hidden transition-colors duration-300" id="home">
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
                        className="max-w-[1280px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10"
                    >
                        <div className="space-y-8 text-center md:text-left">
                            <motion.div 
                                variants={staggerItem}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Available for new projects</span>
                            </motion.div>

                            <motion.h1 
                                variants={staggerItem}
                                className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white leading-[1.1] tracking-tight"
                            >
                                Building digital <br />
                                <span className="text-gradient-primary">experiences.</span>
                            </motion.h1>

                            <motion.p 
                                variants={staggerItem}
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
                            >
                                I’m MD Kamrujjaman Al Kudrot — a Frontend Developer focused on building clean, responsive, and user-centric web interfaces that drive results.
                            </motion.p>

                            <motion.div 
                                variants={staggerItem}
                                className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 pt-4"
                            >
                                <motion.a
                                    href="/MD_Kamrujjaman_Al_Kudrot_Resume.pdf"
                                    download="MD_Kamrujjaman_Al_Kudrot_Resume.pdf"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-widest rounded-full shadow-2xl flex items-center justify-center gap-3 transition-all"
                                >
                                    Download CV
                                    <span className="material-symbols-outlined text-lg">download</span>
                                </motion.a>
                                
                                <motion.button 
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-5 bg-transparent border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-3 transition-all backdrop-blur-sm"
                                >
                                    My Projects
                                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                                </motion.button>
                            </motion.div>

                            <motion.div 
                                variants={staggerItem}
                                className="flex items-center justify-center md:justify-start gap-6 pt-8"
                            >
                                {[
                                    { icon: 'github', url: 'https://github.com/md-kudrot' },
                                    { icon: 'linkedin', url: 'https://linkedin.com/in/md-kamrujjaman-al-kudrot' },
                                    { icon: 'whatsapp', url: 'https://wa.me/+8801315984904' },
                                ].map((social) => (
                                    <motion.a 
                                        key={social.icon}
                                        whileHover={{ y: -3, color: "var(--color-primary)" }}
                                        className="text-zinc-400 dark:text-slate-500 transition-all duration-300" 
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={`fa-brands fa-${social.icon} text-2xl`}></i>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div 
                            variants={fadeUp}
                            className="relative flex items-center justify-center"
                        >
                            {/* Ambient Background Glows */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
                            
                            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5 bg-zinc-900/50">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 z-10" />
                                <img 
                                    src="https://avatars.githubusercontent.com/u/197643931?s=400&v=4" 
                                    alt="MD Kamrujjaman" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                
                                <div className="absolute bottom-8 left-8 right-8 z-20">
                                    <div className="glass-card p-6 rounded-3xl border-white/10 backdrop-blur-2xl flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-white">2+</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years of Exp.</div>
                                        </div>
                                        <div className="h-10 w-[1px] bg-white/10" />
                                        <div>
                                            <div className="text-2xl font-bold text-white">20+</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Projects Done</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Decorative Elements */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-4 top-10 glass-card p-4 rounded-2xl border-white/10 shadow-2xl z-30"
                            >
                                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-4 bottom-20 glass-card p-4 rounded-2xl border-white/10 shadow-2xl z-30"
                            >
                                <span className="material-symbols-outlined text-secondary text-3xl">brush</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
        </section>
    );
};

export default Hero;
