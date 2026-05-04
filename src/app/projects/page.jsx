"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { ProjectCardSkeleton } from '@/components/Skeleton';
import ProjectCard from '@/components/ProjectCard';
import FilterTabs from '@/components/FilterTabs';

const AllProjectsPage = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects.json');
                const data = await response.json();
                setAllProjects(data);
                setFilteredProjects(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        if (allProjects.length > 0) {
            const filtered = activeCategory === 'all' 
                ? allProjects 
                : allProjects.filter(project => project.category === activeCategory);
            
            setFilteredProjects(filtered);
        }
    }, [activeCategory, allProjects]);

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-background transition-colors duration-300 pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={fadeUp}
                    className="mb-12"
                >
                    <Link 
                        href="/#projects" 
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-secondary transition-colors font-bold uppercase text-xs tracking-widest mb-6 group"
                    >
                        <motion.span 
                            whileHover={{ x: -5 }}
                            className="material-symbols-outlined text-lg"
                        >
                            arrow_back
                        </motion.span> 
                        Back
                    </Link>
                    <h1 className="font-h2 text-4xl md:text-6xl text-zinc-900 dark:text-white mb-6">All Projects</h1>
                    <p className="text-zinc-600 dark:text-on-surface-variant text-xl max-w-3xl">
                        A comprehensive showcase of my journey through code, design, and problem-solving. 
                        Explore everything from experimental prototypes to full-scale enterprise applications.
                    </p>
                </motion.div>

                <div className="mb-16">
                    <FilterTabs 
                        activeCategory={activeCategory} 
                        onCategoryChange={setActiveCategory} 
                    />
                </div>

                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div 
                            key="skeletons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[...Array(6)].map((_, i) => (
                                <ProjectCardSkeleton key={i} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            key={activeCategory}
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20">
                                    <h3 className="text-2xl text-zinc-400">No projects found in this category.</h3>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default AllProjectsPage;
