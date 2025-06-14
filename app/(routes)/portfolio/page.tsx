"use client"

import { motion } from 'framer-motion';
import { dataPortfolio } from "@/data";
import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Link from "next/link";

const PortfolioPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <CircleImage />
            <div className="flex flex-col justify-center min-h-screen py-20">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    Mis proyectos
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                        destacados
                    </span>
                </motion.h1>

                <div className="grid gap-10 md:grid-cols-3">
                    {dataPortfolio.map(({ id, title, image, urlGithub, urlDemo }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: id * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="relative overflow-hidden rounded-t-2xl">
                                    <img 
                                        src={image} 
                                        alt={title} 
                                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                                        {title}
                                    </h3>
                                    
                                    <div className="flex gap-4 justify-center">
                                        <Link
                                            href={urlGithub}
                                            target="_blank"
                                            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm font-medium"
                                        >
                                            Ver código
                                        </Link>
                                        <Link
                                            href={urlDemo}
                                            target="_blank"
                                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-secondary to-purple-500 hover:opacity-90 transition-all duration-300 text-sm font-medium"
                                        >
                                            Ver demo
                                        </Link>
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