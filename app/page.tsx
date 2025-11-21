"use client"

import { motion } from 'framer-motion';
import { CoverParticles } from "@/components/cover-particles";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import TransitionPage from "@/components/transition-page";
import { DownloadCV } from "@/components/download-cv";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <TransitionPage />
      <CoverParticles />
      
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Columna de texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Si puedes pensarlo, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                  <TypeAnimation
                    sequence={[
                      'puedes programarlo',
                      1000,
                      'puedes optimizarlo',
                      1000,
                      'puedes implementarlo',
                      1000,
                      'puedes desarrollarlo',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                Como desarrollador full stack en proceso me dedico a diseñar e implementar proyectos buscando otorgar experiencias únicas en cada uno.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
              >
                <Link 
                  href="/portfolio"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-purple-500 hover:opacity-90 transition-all duration-300 text-lg font-medium text-center"
                >
                  Ver proyectos
                </Link>
                <DownloadCV variant="button" />
                 <a
                   href={`https://wa.me/573044434698?text=${encodeURIComponent('Hola, quisiera contactar contigo sobre tus servicios.')}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-8 py-3 rounded-lg border-2 border-secondary hover:bg-secondary/10 transition-all duration-300 text-lg font-medium text-center"
                 >
                   Contacta conmigo
                 </a>
              </motion.div>
            </motion.div>

            {/* Columna de imagen */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <motion.img
                  src="/avatar.png"
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full border-4 border-secondary/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-purple-500/20 rounded-full blur-3xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}