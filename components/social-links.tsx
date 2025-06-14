"use client";
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const SocialLinks = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-6 h-6" />,
            url: 'https://www.linkedin.com/in/Danielcantillo05',
            color: 'hover:text-[#0077B5]'
        },
        {
            name: 'GitHub',
            icon: <Github className="w-6 h-6" />,
            url: 'https://github.com/Kurosaki-057', // Reemplaza con tu URL de GitHub
            color: 'hover:text-[#333] dark:hover:text-white'
        },
        {
            name: 'Email',
            icon: <Mail className="w-6 h-6" />,
            url: 'danielcantillo151@gmail.com', // Reemplaza con tu email
            color: 'hover:text-[#EA4335]'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40"
        >
            <div className="flex flex-col gap-4">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-white/15 backdrop-blur-sm transition-all duration-300 ${link.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {link.icon}
                        <span className="sr-only">{link.name}</span>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default SocialLinks; 