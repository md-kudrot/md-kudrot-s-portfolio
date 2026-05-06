"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-900 w-full py-16 border-t border-white/5 font-sans text-xs uppercase tracking-widest transition-colors duration-300">
            <div className="max-w-[1280px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-3xl font-black text-white uppercase tracking-tighter mb-6">DEV.KUDROT</div>
                        <p className="text-zinc-500 font-bold leading-relaxed max-w-xs text-center md:text-left">
                            Building high-performance, accessible, and visually stunning web experiences.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[10px]">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <Link 
                                    key={item}
                                    href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                                    className="text-zinc-500 hover:text-secondary transition-colors font-bold"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[10px]">Connect</h4>
                        <div className="flex gap-6">
                            {[
                                { icon: 'github', url: 'https://github.com/Kudrot-E-Elahi' },
                                { icon: 'linkedin', url: 'https://linkedin.com/in/md-kamrujjaman-al-kudrot' },
                                { icon: 'twitter', url: '#' }
                            ].map((social) => (
                                <motion.a
                                    key={social.icon}
                                    whileHover={{ y: -5, color: "#ffffff" }}
                                    className="text-zinc-500 font-bold transition-all duration-300"
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`fa-brands fa-${social.icon} text-xl`}></i>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-zinc-600 font-bold tracking-widest text-center md:text-left">
                        © 2026 MD KAMRUJJAMAN AL KUDROT. ALL RIGHTS RESERVED.
                    </div>
                    <motion.a
                        whileHover={{ scale: 1.2, backgroundColor: "#4edea3" }}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-secondary hover:text-white transition-all duration-300 border border-white/5 shadow-xl"
                        href="/#home"
                    >
                        <span className="material-symbols-outlined text-2xl">arrow_upward</span>
                    </motion.a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
