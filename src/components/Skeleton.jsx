"use client";

import React from 'react';

export const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded ${className}`}></div>
);

export const ProjectCardSkeleton = () => (
    <div className="bg-zinc-900/30 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/5 h-full flex flex-col">
        <Skeleton className="h-64 rounded-none w-full opacity-20" />
        <div className="p-8 space-y-6 flex-grow flex flex-col">
            <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full opacity-10" />
                <Skeleton className="h-6 w-16 rounded-full opacity-10" />
            </div>
            <Skeleton className="h-10 w-3/4 opacity-20" />
            <div className="space-y-3 flex-grow">
                <Skeleton className="h-4 w-full opacity-10" />
                <Skeleton className="h-4 w-full opacity-10" />
                <Skeleton className="h-4 w-2/3 opacity-10" />
            </div>
            <div className="flex gap-6 pt-6 mt-auto border-t border-white/5">
                <Skeleton className="h-6 w-20 opacity-10" />
                <Skeleton className="h-6 w-20 opacity-10" />
            </div>
        </div>
    </div>
);

export const HeroSkeleton = () => (
    <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center px-8 w-full">
        <div className="space-y-8">
            <Skeleton className="h-8 w-48 rounded-full opacity-10" />
            <Skeleton className="h-16 md:h-24 w-3/4 opacity-20" />
            <Skeleton className="h-20 w-full opacity-10" />
            <div className="flex gap-5 pt-4">
                <Skeleton className="h-14 w-40 rounded-full opacity-20" />
                <Skeleton className="h-14 w-40 rounded-full opacity-10" />
            </div>
        </div>
        <div className="flex items-center justify-center">
            <Skeleton className="w-full max-w-[480px] aspect-[4/5] rounded-[2.5rem] opacity-20" />
        </div>
    </div>
);

export const SectionTitleSkeleton = () => (
    <div className="flex flex-col items-center space-y-6 mb-20 px-8">
        <Skeleton className="h-14 w-64 opacity-20" />
        <Skeleton className="h-6 w-full max-w-xl opacity-10" />
    </div>
);

export const SectionSkeleton = () => (
    <div className="max-w-[1280px] mx-auto px-8 space-y-12">
        <SectionTitleSkeleton />
        <div className="grid md:grid-cols-2 gap-12">
            {[...Array(2)].map((_, i) => (
                <div key={i} className="bg-zinc-900/30 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5 space-y-8 shadow-2xl">
                    <Skeleton className="h-14 w-14 rounded-2xl opacity-20" />
                    <div className="space-y-4">
                        <Skeleton className="h-10 w-3/4 opacity-20" />
                        <Skeleton className="h-4 w-1/2 opacity-10" />
                    </div>
                    <Skeleton className="h-32 w-full opacity-10" />
                    <div className="flex gap-3">
                        <Skeleton className="h-8 w-24 rounded-full opacity-10" />
                        <Skeleton className="h-8 w-24 rounded-full opacity-10" />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const SkillsSkeleton = () => (
    <div className="max-w-[1280px] mx-auto px-8 space-y-12">
        <SectionTitleSkeleton />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="bg-zinc-900/30 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 space-y-6 shadow-2xl flex flex-col items-center">
                    <Skeleton className="h-14 w-14 rounded-2xl opacity-20" />
                    <Skeleton className="h-4 w-20 opacity-10" />
                </div>
            ))}
        </div>
    </div>
);
