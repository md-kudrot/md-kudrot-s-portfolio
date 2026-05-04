"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/70 dark:bg-background/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/5 transition-colors duration-300"
        >
            <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-8 h-20">
                <Link href="/">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase font-sans antialiased tracking-tight cursor-pointer"
                    >
                        DEV.KUDROT
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <motion.a 
                            key={item}
                            whileHover={{ y: -2, color: "#4edea3" }}
                            className="text-zinc-600 dark:text-zinc-400 font-bold uppercase text-[10px] tracking-[0.2em] transition-colors duration-200" 
                            href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    {/* Theme Toggle */}
                    <motion.button 
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        className="transition-transform text-zinc-600 dark:text-zinc-400 hover:text-secondary dark:hover:text-secondary"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </motion.button>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;
