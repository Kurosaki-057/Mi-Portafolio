import { motion } from 'framer-motion';

export default function AvatarServices() {
    return (
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <motion.img
                src="/avatar.png"
                alt="Avatar"
                className="w-full h-full object-cover rounded-full border-4 border-secondary/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-purple-500/20 rounded-full blur-3xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
        </div>
    );
}