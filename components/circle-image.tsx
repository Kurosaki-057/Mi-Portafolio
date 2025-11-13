"use client"

const CircleImage = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute pointer-events-none" aria-hidden>
            {/* Decorative SVG circles as fallback for missing image files */}
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] h-[300px]">
                <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.25" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" x2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.18" />
                    </linearGradient>
                </defs>
                <circle cx="220" cy="80" r="70" fill="url(#g1)" />
                <circle cx="80" cy="220" r="90" fill="url(#g2)" />
                <circle cx="170" cy="170" r="40" fill="#ffffff" fillOpacity="0.04" />
            </svg>
        </div>
    );
}

export default CircleImage;