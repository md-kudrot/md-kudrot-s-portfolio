"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewPortConfig } from '@/lib/animations';
import { SectionTitleSkeleton, Skeleton } from './Skeleton';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const socialLinks = [
        { 
            name: 'GitHub', 
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ), 
            url: 'https://github.com/md-kudrot',
            detail: 'md-kudrot',
            color: 'hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900'
        },
        { 
            name: 'LinkedIn', 
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.967v5.701h-3v-11h2.88v1.505h.042c.401-.758 1.379-1.551 2.824-1.551 3.021 0 3.575 1.988 3.575 4.572v6.474z" />
                </svg>
            ), 
            url: 'https://www.linkedin.com/in/md-kamrujjaman-al-kudrot/',
            detail: 'MD Kamrujjaman',
            color: 'hover:bg-[#0077b5] hover:text-white'
        },
        { 
            name: 'WhatsApp', 
            icon: (
                <i className="fa-brands fa-whatsapp text-2xl"></i>
            ), 
            url: 'https://wa.me/+8801315984904',
            detail: '+880 1315 984904',
            color: 'hover:bg-[#25d366] hover:text-white'
        },
        { 
            name: 'Email', 
            icon: (
                <span className="material-symbols-outlined text-2xl">mail</span>
            ), 
            url: 'mailto:mdkurot592@gmail.com',
            detail: 'mdkudrot592@gmail.com',
            color: 'hover:bg-secondary hover:text-on-secondary'
        },
    ];

    return (
        <section className="py-unit-32 px-8 bg-white dark:bg-background transition-colors duration-300" id="contact">
            <div className="max-w-[1280px] mx-auto">
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
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        >
                            <div className="space-y-8">
                                <Skeleton className="h-12 w-48 rounded-lg" />
                                <Skeleton className="h-6 w-full max-w-md rounded-lg" />
                                <div className="glass-card p-8 rounded-2xl space-y-6 mt-8">
                                    <Skeleton className="h-14 w-full rounded-xl" />
                                    <Skeleton className="h-14 w-full rounded-xl" />
                                    <Skeleton className="h-32 w-full rounded-xl" />
                                    <Skeleton className="h-14 w-full rounded-xl" />
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="glass-card p-8 rounded-2xl h-full space-y-8">
                                    <Skeleton className="h-8 w-40 rounded-lg" />
                                    <div className="grid grid-cols-2 gap-4">
                                        {[...Array(4)].map((_, i) => (
                                            <Skeleton key={i} className="h-24 rounded-2xl" />
                                        ))}
                                    </div>
                                    <Skeleton className="h-32 w-full rounded-2xl" />
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="content"
                            initial="initial"
                            animate="animate"
                            variants={fadeUp}
                            className="w-full"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                {/* Left Column: Form */}
                                <div className="space-y-10">
                                    <div className="text-left">
                                        <h2 className="font-h2 text-3xl md:text-5xl text-zinc-900 dark:text-white mb-4">Get In Touch</h2>
                                        <p className="text-zinc-600 dark:text-on-surface-variant text-xl max-w-md">Let's discuss your next project or opportunities for collaboration.</p>
                                    </div>

                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={viewPortConfig}
                                        transition={{ duration: 0.8 }}
                                        className="glass-card p-8 rounded-2xl shadow-lg border-zinc-100 dark:border-white/5"
                                    >
                                        <form className="space-y-5">
                                            {[
                                                { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                                                { label: 'Email Address', type: 'email', placeholder: 'john@example.com' }
                                            ].map((field, idx) => (
                                                <div key={idx}>
                                                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-on-surface-variant mb-2 ml-1">{field.label}</label>
                                                    <input 
                                                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl text-zinc-900 dark:text-white transition-all outline-none font-medium text-lg placeholder:text-zinc-400 dark:placeholder:text-zinc-600" 
                                                        placeholder={field.placeholder} 
                                                        type={field.type} 
                                                    />
                                                </div>
                                            ))}
                                            <div>
                                                <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-on-surface-variant mb-2 ml-1">Message</label>
                                                <textarea 
                                                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl text-zinc-900 dark:text-white transition-all outline-none font-medium text-lg placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none" 
                                                    placeholder="Your message here..." 
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                            <motion.button 
                                                whileHover={{ scale: 1.01, brightness: 1.1, boxShadow: "0 10px 30px rgba(78, 222, 163, 0.2)" }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-4 bg-secondary text-on-secondary font-black text-xl rounded-xl flex items-center justify-center gap-3 transition-all shadow-md mt-2"
                                            >
                                                Send Message <span className="material-symbols-outlined text-2xl">send</span>
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                </div>

                                {/* Right Column: Social Box */}
                                <div className="space-y-8">
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={viewPortConfig}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="glass-card p-8 rounded-2xl shadow-lg border-zinc-100 dark:border-white/5 h-full"
                                    >
                                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Connect With Me</h3>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            {socialLinks.map((social, idx) => (
                                                <motion.a
                                                    key={idx}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    className={`flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/5 transition-all duration-300 ${social.color} group`}
                                                >
                                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-zinc-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                                                        {social.icon}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-black uppercase tracking-widest opacity-60">{social.name}</span>
                                                        <span className="text-xs font-bold truncate max-w-[120px]">{social.detail}</span>
                                                    </div>
                                                </motion.a>
                                            ))}
                                        </div>

                                        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                                            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Based in Bangladesh</h4>
                                            <p className="text-sm text-zinc-600 dark:text-on-surface-variant leading-relaxed">
                                                I'm currently available for freelance work and full-time opportunities. Feel free to reach out if you have any questions or just want to say hi!
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Contact;
