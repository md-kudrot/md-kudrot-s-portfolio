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
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeCategory === category.id
                            ? 'text-on-secondary'
                            : 'text-zinc-600 dark:text-on-surface-variant hover:bg-zinc-200 dark:hover:bg-white/5'
                    }`}
                >
                    {activeCategory === category.id && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-secondary rounded-full shadow-lg"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category.label}</span>
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;
