"use client";

import React from 'react';

export const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded ${className}`}></div>
);

export const ProjectCardSkeleton = () => (
    <div className="glass-card rounded-2xl overflow-hidden shadow-md border-zinc-100 dark:border-white/5 h-full flex flex-col">
        <Skeleton className="h-56 rounded-none w-full" />
        <div className="p-8 space-y-4 flex-grow flex flex-col">
            <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <Skeleton className="h-8 w-3/4" />
            <div className="space-y-2 flex-grow">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex gap-6 pt-4 mt-auto">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
            </div>
        </div>
    </div>
);

export const HeroSkeleton = () => (
    <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-unit-16 items-center px-8">
        <div className="space-y-unit-6">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-16 md:h-24 w-3/4" />
            <Skeleton className="h-20 w-full" />
            <div className="flex gap-4">
                <Skeleton className="h-12 w-32 rounded-full" />
                <Skeleton className="h-12 w-32 rounded-full" />
            </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px]">
            <Skeleton className="w-40 h-40 md:w-72 md:h-72 rounded-full" />
        </div>
    </div>
);

export const SectionTitleSkeleton = () => (
    <div className="flex flex-col items-center space-y-4 mb-16 px-8">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-6 w-96" />
    </div>
);

export const SectionSkeleton = () => (
    <div className="max-w-[1280px] mx-auto px-8 space-y-12">
        <SectionTitleSkeleton />
        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-40 w-full" />
                <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-24 w-full rounded-2xl" />
                    <Skeleton className="h-24 w-full rounded-2xl" />
                </div>
            </div>
            <div className="space-y-6">
                <Skeleton className="h-10 w-48" />
                <div className="space-y-8">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                </div>
            </div>
        </div>
    </div>
);
