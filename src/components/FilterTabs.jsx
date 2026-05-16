"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FilterTabs = ({ activeCategory, onCategoryChange }) => {
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'nextjs', label: 'Next.js' },
        { id: 'react', label: 'React.js' },
        { id: 'vanilla', label: 'HTML + JS + Tailwind' }
    ];

    return (
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start gap-4 mb-12 pb-4 md:pb-0 no-scrollbar">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`relative px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                        activeCategory === category.id
                            ? 'text-zinc-900'
                            : 'text-zinc-500 dark:text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    {activeCategory === category.id && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-white rounded-full shadow-2xl"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category.label}</span>
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;
