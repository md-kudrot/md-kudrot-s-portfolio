"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const ProjectDetails = () => {
  const params = useParams();
  const id = params?.id;
  
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        const foundProject = data.find(p => p.id === id);
        setProject(foundProject);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching project:", error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-background">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-secondary/20 mb-4"></div>
          <div className="h-4 w-32 bg-zinc-100 dark:bg-white/5 rounded"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-background px-8">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/" className="text-secondary hover:underline font-bold">Return Home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-background transition-colors duration-300 pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-10"
        >
          {/* Title */}
          <motion.div variants={staggerItem} className="space-y-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-secondary transition-colors font-bold uppercase text-xs tracking-widest mb-4 group"
            >
              <motion.span 
                whileHover={{ x: -5 }}
                className="material-symbols-outlined text-lg"
              >
                arrow_back
              </motion.span> 
              Back to Projects
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
              {project.title}
            </h1>
          </motion.div>

          {/* Banner Image */}
          <motion.div 
            variants={fadeUp}
            className="w-full rounded-xl overflow-hidden shadow-xl border border-zinc-100 dark:border-white/5"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Full Description */}
          <motion.section variants={staggerItem} className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">Description</h2>
            <p className="text-lg text-zinc-600 dark:text-on-surface-variant leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.section>

          {/* Tech Stack */}
          <motion.section variants={staggerItem} className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item, i) => (
                <span key={i} className="bg-primary/10 text-cyan-700 dark:text-primary-fixed-dim text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-primary/20">
                  {item}
                </span>
              ))}
            </div>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Key Contributions */}
            {project.contributions && (
              <motion.section variants={staggerItem} className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">Key Contributions</h2>
                <ul className="space-y-3">
                  {project.contributions.map((item, i) => (
                    <li key={i} className="flex gap-3 text-zinc-600 dark:text-on-surface-variant text-base">
                      <span className="text-secondary mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Challenges Faced */}
            {project.challenges && (
              <motion.section variants={staggerItem} className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider text-sm text-red-500">Challenges Faced</h2>
                <ul className="space-y-3">
                  {project.challenges.map((item, i) => (
                    <li key={i} className="flex gap-3 text-zinc-600 dark:text-on-surface-variant text-base">
                      <span className="text-red-500 mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          {/* Future Improvements */}
          {project.improvements && (
            <motion.section variants={staggerItem} className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wider text-sm text-secondary">Future Improvements</h2>
              <ul className="space-y-3">
                {project.improvements.map((item, i) => (
                  <li key={i} className="flex gap-3 text-zinc-600 dark:text-on-surface-variant text-base font-medium">
                    <span className="material-symbols-outlined text-secondary text-lg">trending_up</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Action Buttons */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 pt-6">
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-4 bg-secondary text-on-secondary font-black rounded-xl hover:brightness-110 transition-all shadow-lg text-lg"
            >
              Live Project <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-4 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-black rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-all text-lg"
            >
              GitHub Repository <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetails;
