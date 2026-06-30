"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const DynamicBackground = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-transparent">
            {/* Animated Grid */}
            <div 
                className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-[0.15]' : 'opacity-[0.05]'}`}
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${isDark ? '#818cf8' : '#000000'} 1px, transparent 1px),
                        linear-gradient(to bottom, ${isDark ? '#818cf8' : '#000000'} 1px, transparent 1px)
                    `,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />

            {/* Glowing Orbs / Glassmorphism Blobs */}
            {/* Top Left Blob */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] opacity-60 will-change-transform" 
                style={{
                    background: isDark ? 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(30,58,138,0) 70%)' : 'radial-gradient(circle, rgba(147,197,253,0.6) 0%, rgba(219,234,254,0) 70%)',
                    animation: 'float-subtle 15s ease-in-out infinite'
                }}
            />
            
            {/* Middle Right Blob */}
            <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full filter blur-[120px] opacity-50 will-change-transform" 
                style={{
                    background: isDark ? 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(49,46,129,0) 70%)' : 'radial-gradient(circle, rgba(167,139,250,0.5) 0%, rgba(221,214,254,0) 70%)',
                    animation: 'float-subtle 18s ease-in-out infinite reverse'
                }}
            />

            {/* Bottom Left Blob */}
            <div className="absolute bottom-[-20%] left-[10%] w-[60vw] h-[60vw] rounded-full filter blur-[150px] opacity-40 will-change-transform" 
                style={{
                    background: isDark ? 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(6,78,59,0) 70%)' : 'radial-gradient(circle, rgba(110,231,183,0.4) 0%, rgba(209,250,229,0) 70%)',
                    animation: 'float-subtle 20s ease-in-out infinite'
                }}
            />

            {/* Subtle Noise Overlay for Texture */}
            <svg className={`absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay ${isDark ? 'opacity-[0.06]' : 'opacity-[0.08]'}`} xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
            </svg>
        </div>
    );
};

export default DynamicBackground;
