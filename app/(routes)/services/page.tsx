"use client"

import { motion } from 'framer-motion';
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import { serviceData } from "@/data";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="flex flex-col justify-center min-h-screen py-20">
                <div className="container max-w-6xl px-4 mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            Mis
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                                servicios
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Ofrezco servicios de desarrollo web full stack especializados en la creación de sitios web y aplicaciones atractivas y funcionales.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {serviceData.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-4 mb-6 rounded-2xl bg-gradient-to-r from-secondary/20 to-purple-500/20 group-hover:from-secondary/30 group-hover:to-purple-500/30 transition-all duration-300">
                                            <div className="text-4xl text-secondary">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-center mt-12"
                    >
                        <a
                            href={`https://wa.me/573044434698?text=${encodeURIComponent('Hola, quisiera contactar contigo sobre tus servicios.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-purple-500 hover:opacity-90 transition-all duration-300 text-lg font-medium"
                        >
                            Contacta conmigo
                        </a>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;