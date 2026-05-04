"use client";

import { useState, useEffect } from 'react';

/**
 * Hook to manage skeleton loading state.
 * @param {number} delay - Artificial delay to show the skeleton (ms).
 * @returns {boolean} - true if loading, false if content should be shown.
 */
export const useSkeleton = (delay = 800) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isLoading;
};
