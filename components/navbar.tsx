"use client";
import { itemsNavbar } from "@/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
    const router = usePathname();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Verificar preferencia guardada en localStorage
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
        >
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 dark:bg-gray-800/15 backdrop-blur-sm">
                    {itemsNavbar.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative group"
                        >
                            <div className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary dark:hover:bg-gray-700">
                                <Link href={item.link} className="hover:text-black-500 dark:hover:text-white">
                                    {item.icon}
                                </Link>
                            </div>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary dark:hover:bg-gray-700"
                        onClick={toggleTheme}
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </motion.div>
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;