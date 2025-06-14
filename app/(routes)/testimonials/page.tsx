"use client"

import { motion } from 'framer-motion';
import { dataTestimonials } from '@/data';
import CircleImage from '@/components/circle-image';
import TransitionPage from '@/components/transition-page';

const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage />
            <div className='flex flex-col justify-center min-h-screen py-20'>
                <CircleImage />
                <div className="container max-w-6xl px-4 mx-auto">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-center mb-16"
                    >
                        Mis principales
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                            soft skills
                        </span>
                    </motion.h1>

                    <div className="grid gap-10 md:grid-cols-3">
                        {dataTestimonials.map(({ id, name, description }) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: id * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-purple-500 flex items-center justify-center">
                                            <span className="text-white font-bold">{id}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">
                                        {name}
                                    </h3>
                                    <p className="text-gray-300 text-center leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialsPage;