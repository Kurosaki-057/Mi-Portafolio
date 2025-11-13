"use client"

import  {Avatar}  from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { skills } from "@/data";
import { motion } from "framer-motion";

// Componente local para renderizar las habilidades con barras y micro-animaciones
function levelToPercent(level: string) {
    const key = (level || '').toLowerCase();
    if (key.includes('avanz')) return 92;
    if (key.includes('inter')) return 66;
    if (key.includes('bás') || key.includes('bas')) return 36;
    return 50;
}

const SkillsGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s, idx) => {
                const pct = levelToPercent(s.level || '');
                return (
                    <motion.div
                        key={s.name + idx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: idx * 0.05 }}
                        whileHover={{ translateY: -6 }}
                        className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/8 border border-white/10 shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/5 text-secondary text-2xl">
                                {s.icon}
                            </div>
                            <div>
                                <div className="text-lg font-semibold">{s.name}</div>
                                <div className="text-sm text-gray-400">{s.level}</div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="w-full h-3 bg-white/8 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-secondary to-purple-500" style={{ width: `${pct}%` }} />
                            </div>
                            <div className="mt-2 text-xs text-gray-300">Competencia: {pct}%</div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                    <div>
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                            Toda mi{' '}
                            <span className="font-bold text-secondary">
                                trayectoria profesional
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            Soy un desarrollador full stack apasionado por crear soluciones tecnológicas innovadoras. 
                            Mi enfoque se centra en desarrollar aplicaciones web modernas y eficientes, 
                            combinando las mejores prácticas de desarrollo con un diseño atractivo y funcional.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Avatar />
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="text-secondary">Estadísticas</span> profesionales
                    </h2>
                    <CounterServices />
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Mi <span className="text-secondary">trayectoria</span>
                    </h2>
                    <TimeLine />
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Habilidades <span className="text-secondary">técnicas</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Tarjetas dinámicas basadas en data.skills */}
                        {/** Se importa `skills` desde data.tsx para render dinámico */}
                        {/** las tarjetas ahora se renderizan en <SkillsGrid /> abajo */}
                    </div>

                    {/* Componente dinámico de skills (renderizado abajo) */}
                    <div className="mt-8">
                        {/* Re-render skills como badges y barras de progreso */}
                        <SkillsGrid />
                    </div>
                </div>
            </ContainerPage>
        </>
    );
}

export default AboutMePage;