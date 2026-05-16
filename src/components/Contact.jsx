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
            icon: <i className="fa-brands fa-github text-2xl"></i>, 
            url: 'https://github.com/md-kudrot',
            detail: 'md-kudrot',
            color: 'hover:border-primary/50'
        },
        { 
            name: 'LinkedIn', 
            icon: <i className="fa-brands fa-linkedin text-2xl"></i>, 
            url: 'https://linkedin.com/in/md-kamrujjaman-al-kudrot',
            detail: 'MD Kamrujjaman',
            color: 'hover:border-[#0077b5]/50'
        },
        { 
            name: 'WhatsApp', 
            icon: <i className="fa-brands fa-whatsapp text-2xl"></i>, 
            url: 'https://wa.me/+8801315984904',
            detail: '+880 1315 984904',
            color: 'hover:border-[#25d366]/50'
        },
        { 
            name: 'Email', 
            icon: <span className="material-symbols-outlined text-2xl">mail</span>, 
            url: 'mailto:kudrot593@gmail.com',
            detail: 'kudrot593@gmail.com',
            color: 'hover:border-primary/50'
        },
    ];

    return (
        <section className="py-32 px-8 bg-transparent transition-colors duration-300" id="contact">
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                                {/* Left Column: Form */}
                                <div className="space-y-12">
                                    <div className="text-left">
                                        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">Contact.</h2>
                                        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md leading-relaxed">
                                            Have a project in mind? Let's discuss how we can build something amazing together.
                                        </p>
                                    </div>

                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={viewPortConfig}
                                        transition={{ duration: 0.8 }}
                                        className="bg-zinc-900/50 dark:bg-surface-container backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/5"
                                    >
                                        <form className="space-y-6">
                                            {[
                                                { label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
                                                { label: 'Email Address', type: 'email', placeholder: 'Enter your email' }
                                            ].map((field, idx) => (
                                                <div key={idx}>
                                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">{field.label}</label>
                                                    <input 
                                                        className="w-full px-6 py-4 bg-zinc-950/30 border border-white/5 focus:border-primary/50 focus:bg-zinc-950/50 rounded-2xl text-white transition-all outline-none text-sm placeholder:text-zinc-600" 
                                                        placeholder={field.placeholder} 
                                                        type={field.type} 
                                                    />
                                                </div>
                                            ))}
                                            <div>
                                                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Message</label>
                                                <textarea 
                                                    className="w-full px-6 py-4 bg-zinc-950/30 border border-white/5 focus:border-primary/50 focus:bg-zinc-950/50 rounded-2xl text-white transition-all outline-none text-sm placeholder:text-zinc-600 resize-none" 
                                                    placeholder="Tell me about your project..." 
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                            <motion.button 
                                                whileHover={{ scale: 1.02, y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-widest rounded-full shadow-2xl flex items-center justify-center gap-3 transition-all mt-4"
                                            >
                                                Send Message 
                                                <span className="material-symbols-outlined text-lg">send</span>
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                </div>

                                {/* Right Column: Social Box */}
                                <div className="space-y-10 lg:pt-32">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {socialLinks.map((social, idx) => (
                                            <motion.a
                                                key={idx}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.02, y: -5 }}
                                                className={`flex items-center gap-5 p-6 rounded-3xl border border-white/5 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 ${social.color} group`}
                                            >
                                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-950/50 text-slate-400 group-hover:text-primary transition-colors">
                                                    {social.icon}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{social.name}</span>
                                                    <span className="text-xs font-bold text-slate-300 truncate max-w-[120px]">{social.detail}</span>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>

                                    <motion.div 
                                        variants={fadeUp}
                                        className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 backdrop-blur-sm"
                                    >
                                        <h4 className="text-xl font-bold text-white mb-4">Let's build the future.</h4>
                                        <p className="text-slate-400 leading-relaxed text-sm">
                                            Currently based in Bangladesh, available for remote work worldwide. 
                                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                        </p>
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
