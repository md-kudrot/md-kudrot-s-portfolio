"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-900 w-full py-16 border-t border-white/5 font-sans text-xs uppercase tracking-widest transition-colors duration-300">
            <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="text-2xl font-black text-white uppercase tracking-tighter">DEV.KUDROT</div>
                <div className="text-zinc-500 font-bold tracking-widest text-center md:text-left">
                    © 2026 PRECISION ENGINEERED. <br className="md:hidden" /> ALL RIGHTS RESERVED.
                </div>
                <div className="flex gap-unit-8">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                        <motion.a
                            key={platform}
                            whileHover={{ y: -5, color: "#ffffff" }}
                            className="text-zinc-500 font-bold transition-all duration-300"
                            href="#"
                        >
                            {platform}
                        </motion.a>
                    ))}
                    <motion.a
                        whileHover={{ scale: 1.2, backgroundColor: "#00dbe9" }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 text-cyan-400 hover:text-white transition-all duration-300"
                        href="/#home"
                    >
                        <span className="material-symbols-outlined text-xl">arrow_upward</span>
                    </motion.a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
