"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    
                    const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
                    const current = sections.find(section => {
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            return rect.top >= -100 && rect.top <= 300;
                        }
                        return false;
                    });
                    if (current) setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { 
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        open: { 
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                ? 'py-4 px-8' 
                : 'py-6 px-8'
            }`}
        >
            <nav className={`max-w-[1280px] mx-auto flex items-center justify-between transition-all duration-500 ${
                isScrolled 
                ? 'bg-white/80 dark:bg-zinc-900/75 backdrop-blur-xl border border-zinc-200 dark:border-white/5 py-3 px-6 md:px-8 rounded-full shadow-lg' 
                : 'bg-transparent'
            }`}>
                <Link href="/" className="text-xl font-extrabold tracking-tighter text-zinc-900 dark:text-white z-50">
                    MD.KUDROT
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                activeSection === item 
                                ? 'text-primary' 
                                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
                            }`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <motion.button 
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 transition-transform text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </motion.button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-zinc-900 dark:text-white z-50"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-white dark:bg-zinc-950 z-40 flex flex-col justify-center items-center gap-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className={`text-3xl font-bold uppercase tracking-[0.2em] transition-all ${
                                    activeSection === item 
                                    ? 'text-primary' 
                                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                                }`}
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
