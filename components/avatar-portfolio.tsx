"use client"

import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute pointer-events-none">
            {/* Decorative avatar placeholder (SVG blob) instead of external image */}
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] h-[300px]" aria-hidden>
                <defs>
                    <linearGradient id="av1" x1="0" x2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.18" />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="300" height="300" rx="36" fill="url(#av1)" />
                <circle cx="150" cy="110" r="44" fill="#ffffff" fillOpacity="0.08" />
                <rect x="60" y="170" width="180" height="70" rx="10" fill="#ffffff" fillOpacity="0.04" />
            </svg>
        </MotionTransition>
    );
}

export default AvatarPortfolio;