"use client"

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MotionTransition } from "./transition-component";

export function Avatar() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setReady(true));
    }, []);

    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute w-[220px] h-[220px]">
            <div className="relative w-[220px] h-[220px]">
                {/* Decorative SVG blob */}
                <svg viewBox="0 0 200 200" className="w-full h-full rounded-full">
                    <defs>
                        <linearGradient id="a" x1="0" x2="1">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.18" />
                        </linearGradient>
                    </defs>
                    <rect width="200" height="200" rx="36" fill="url(#a)" />
                </svg>

                {ready && (
                    <div className="absolute inset-0 pointer-events-none">
                        <Particles
                            id="avatar-particles"
                            options={{
                                fpsLimit: 60,
                                particles: {
                                    number: { value: 30, density: { enable: true } },
                                    color: { value: ["#8b5cf6", "#ec4899", "#06b6d4"] },
                                    links: { enable: false },
                                    move: { enable: true, speed: 0.8, outModes: { default: "bounce" } },
                                    size: { value: { min: 1, max: 4 } },
                                    opacity: { value: 0.6 },
                                },
                                interactivity: {
                                    events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
                                    modes: { repulse: { distance: 80, duration: 0.4 }, push: { quantity: 2 } },
                                },
                                detectRetina: true,
                            }}
                        />
                    </div>
                )}
            </div>
        </MotionTransition>
    );
}