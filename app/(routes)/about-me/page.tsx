"use client"

import  {Avatar}  from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Frontend */}
                        <div className="group p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl hover:from-white/10 hover:to-white/20 transition-all duration-300 border border-white/10 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Frontend
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>React & Next.js</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Angular</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>TypeScript</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Tailwind CSS</span>
                                </div>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="group p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl hover:from-white/10 hover:to-white/20 transition-all duration-300 border border-white/10 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                                Backend
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Node.js & Express</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Nest.js</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Python & Django</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>RESTful APIs</span>
                                </div>
                            </div>
                        </div>

                        {/* Database */}
                        <div className="group p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl hover:from-white/10 hover:to-white/20 transition-all duration-300 border border-white/10 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                                Base de Datos
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>MongoDB</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>PostgreSQL</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>MySQL</span>
                                </div>
                            </div>
                        </div>

                        {/* Herramientas */}
                        <div className="group p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl hover:from-white/10 hover:to-white/20 transition-all duration-300 border border-white/10 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Herramientas
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Git & GitHub</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Docker</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Postman</span>
                                </div>
                            </div>
                        </div>

                        {/* Testing */}
                        <div className="group p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl hover:from-white/10 hover:to-white/20 transition-all duration-300 border border-white/10 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Testing
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Jest</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>React Testing Library</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Pytest</span>
                                </div>
                            </div>
                        </div>

                        {/* Metodologías */}
                        <div className="group p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl hover:from-white/10 hover:to-white/20 transition-all duration-300 border border-white/10 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Metodologías
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Agile & Scrum</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>CI/CD</span>
                                </div>
                                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>TDD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerPage>
        </>
    );
}

export default AboutMePage;