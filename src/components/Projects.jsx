"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewPortConfig, staggerContainer } from '@/lib/animations';
import { ProjectCardSkeleton } from './Skeleton';
import ProjectCard from './ProjectCard';
import FilterTabs from './FilterTabs';

const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [displayProjects, setDisplayProjects] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects.json');
                const data = await response.json();
                setAllProjects(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsLoading(false);
            }
        };

        if (isVisible) {
            const timer = setTimeout(() => {
                fetchProjects();
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    useEffect(() => {
        if (allProjects.length > 0) {
            const filtered = activeCategory === 'all' 
                ? allProjects 
                : allProjects.filter(project => project.category === activeCategory);
            
            setDisplayProjects(filtered.slice(0, 4));
            setHasMore(filtered.length > 4);
        }
    }, [activeCategory, allProjects]);

    return (
        <section className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-surface-container-low transition-colors duration-300" id="projects">
            <div className="max-w-[1280px] mx-auto">
                <motion.div 
                    initial="initial"
                    whileInView={() => {
                        setIsVisible(true);
                        return "animate";
                    }}
                    viewport={viewPortConfig}
                    variants={fadeUp}
                    className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="font-h2 text-3xl md:text-5xl text-zinc-900 dark:text-white mb-4">Featured Projects</h2>
                        <p className="text-zinc-600 dark:text-on-surface-variant text-lg">Selected works from my portfolio that demonstrate my expertise in frontend development and UI architecture.</p>
                    </div>
                    <Link 
                        href="/projects"
                        className="hidden md:flex text-secondary font-bold hover:underline items-center gap-2 text-lg whitespace-nowrap group"
                    >
                        View All Projects 
                        <motion.span 
                            whileHover={{ x: 5 }}
                            className="material-symbols-outlined"
                        >
                            arrow_forward
                        </motion.span>
                    </Link>
                </motion.div>

                <FilterTabs 
                    activeCategory={activeCategory} 
                    onCategoryChange={setActiveCategory} 
                />

                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div 
                            key="skeletons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                        >
                            {[...Array(2)].map((_, i) => (
                                <ProjectCardSkeleton key={i} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            key={activeCategory}
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
                        >
                            {displayProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* See More Button */}
                {!isLoading && hasMore && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 flex justify-center"
                    >
                        <Link 
                            href="/projects"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-secondary text-on-secondary font-black rounded-xl hover:brightness-110 transition-all shadow-lg active:scale-95 group text-lg"
                        >
                            See More Projects
                            <motion.span 
                                className="material-symbols-outlined"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                            >
                                arrow_forward
                            </motion.span>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
