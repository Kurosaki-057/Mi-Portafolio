import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            key={id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden"
        >
            <h3 className="mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">{title}</h3>
            <div className="overflow-hidden rounded-lg h-48 flex items-center justify-center bg-gradient-to-r from-secondary/10 to-purple-100">
                {!imgError && image ? (
                    // usar etiqueta img para permitir fallback onError
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={image}
                        alt={title}
                        onError={() => setImgError(true)}
                        className="w-full h-48 object-cover transition-transform duration-500"
                    />
                ) : (
                    // Placeholder visual cuando no hay imagen o falla la carga
                    <div className="w-full h-48 flex flex-col items-center justify-center gap-3 p-4">
                        <div className="w-full h-full rounded-lg bg-gradient-to-r from-secondary to-purple-500 opacity-30" />
                        <div className="absolute text-sm text-white/90 font-medium">Imagen no disponible</div>
                    </div>
                )}
            </div>

            <div className="flex gap-5 mt-5 justify-center">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="px-4 py-2 transition duration-150 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium"
                >
                    Ver código
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="px-4 py-2 transition duration-150 rounded-lg bg-gradient-to-r from-secondary to-purple-500 hover:opacity-90 text-sm font-medium"
                >
                    Ver demo
                </Link>
            </div>
        </motion.div>
    );
}

export default PortfolioBox