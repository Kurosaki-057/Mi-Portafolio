"use client"

import { motion } from 'framer-motion';
import { dataPortfolio } from "@/data";
import AvatarPortfolio from "@/components/avatar-portfolio";
import { CoverParticles } from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Link from "next/link";
import Image from "next/image";

const PortfolioPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <CoverParticles />
            <AvatarPortfolio />
            {/* Eliminado cualquier otro componente de partículas, solo queda CoverParticles */}
            {/* <CircleImage /> eliminado si tenía partículas decorativas */}
            <div className="flex flex-col justify-center min-h-screen py-20">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-3xl font-bold text-center md:text-5xl"
                >
                    Mis proyectos
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                        destacados
                    </span>
                </motion.h1>

                <div className="grid gap-10 md:grid-cols-3">
                    {dataPortfolio.filter(p => typeof p?.id === 'number' && p.title && p.image).map(({ id, title, image, urlGithub, urlDemo }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: Number(id) * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-secondary/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl"></div>
                            <div className="relative overflow-hidden transition-all duration-300 border bg-white/5 backdrop-blur-sm rounded-2xl border-white/10 hover:border-white/20">
                                <div className="relative overflow-hidden rounded-t-2xl">
                                    {typeof image === 'string' && image ? (
                                        <Image
                                            src={image.startsWith('/') ? image : `/${image}`}
                                            alt={title}
                                            width={400}
                                            height={192}
                                            className="object-cover w-full h-48 transition-transform duration-500 transform group-hover:scale-110 rounded-t-2xl"
                                            priority={id === 1}
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-48 rounded-lg bg-gradient-to-r from-secondary/10 to-purple-100">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="24" cy="24" r="22" fill="#8b5cf6" fillOpacity="0.15" />
                                                <circle cx="24" cy="24" r="14" fill="#ec4899" fillOpacity="0.12" />
                                            </svg>
                                            <span className="ml-2 text-sm text-gray-400">Imagen no disponible</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-100"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                                        {title}
                                    </h3>
                                    <div className="flex justify-center gap-4">
                                        {urlGithub && urlGithub !== '#!' && (
                                            <Link
                                                href={urlGithub}
                                                target="_blank"
                                                className="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg bg-white/10 hover:bg-white/20"
                                            >
                                                Ver código
                                            </Link>
                                        )}
                                        {urlDemo && urlDemo !== '#!' && (
                                            <Link
                                                href={urlDemo}
                                                target="_blank"
                                                className="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg bg-gradient-to-r from-secondary to-purple-500 hover:opacity-90"
                                            >
                                                Ver demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;