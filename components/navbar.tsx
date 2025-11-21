"use client";
import { itemsNavbar } from "@/data";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { DownloadCV } from "./download-cv";
import { useTheme } from "./theme-provider";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

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
                    <DownloadCV variant="icon" showLabel={true} />
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary dark:hover:bg-gray-700"
                        onClick={toggleTheme}
                        title={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </motion.div>
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;