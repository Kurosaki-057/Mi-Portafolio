"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

interface DownloadCVProps {
    variant?: "button" | "icon";
    showLabel?: boolean;
}

export const DownloadCV = ({ variant = "button", showLabel = true }: DownloadCVProps) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/MI-CV2025.pdf";
        link.download = "MI-CV2025.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (variant === "icon") {
        return (
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDownload}
                className="relative group px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary dark:hover:bg-gray-700"
                title="Descargar CV"
            >
                <Download className="w-5 h-5" />
                {showLabel && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Descargar CV
                    </div>
                )}
            </motion.button>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-8 py-3 rounded-lg border-2 border-secondary hover:bg-secondary/10 transition-all duration-300 text-lg font-medium flex items-center gap-2"
        >
            <Download size={20} />
            Descargar CV
        </motion.button>
    );
};
