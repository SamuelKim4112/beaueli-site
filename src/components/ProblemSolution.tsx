
"use client";

import { CheckCircle2, Info, ShieldCheck, TrendingUp } from "lucide-react"

export function ProblemSolution() {
    return (
        <section id="science" className="py-20 md:py-32 bg-[#0A0A0A] overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10 w-full max-w-7xl">

                {/* 1. Header & Context Grid - Centered Single Column */}
                <div className="flex flex-col items-center text-center mb-24 md:mb-24 max-w-4xl mx-auto">

                    {/* Authority */}
                    <div className="flex flex-col gap-6 items-center">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit backdrop-blur-sm">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                            <span className="text-[10px] font-medium text-gray-300 uppercase tracking-[0.2em]">ABOUT MINOXIDIL</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 tracking-tight">
                            Active Ingredient #1 – <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D55A]">Minoxidil</span>
                        </h2>
                        {/* Hero-style Grouping with Gold Accent - Thinner Line */}
                        <div className="border-l border-[#D4AF37]/80 pl-6 md:pl-8 mb-8 md:mb-8 text-left max-w-2xl">
                            <p className="text-lg text-gray-400 font-light leading-relaxed">
                                Minoxidil is an FDA-approved solution supported by decades of research for its ability to help slow further thinning and support hair density.
                                <br /><br />
                                Designed for visible improvement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Stat Card - Compliance Safe */}
                <div className="relative w-full rounded-3xl overflow-hidden bg-[#0F0F0F] border border-white/5 shadow-2xl group">
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.05),_transparent_70%)]"></div>

                    <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* The Big Number */}
                        <div className="flex flex-col text-center md:text-left">
                            <span className="text-[80px] md:text-[100px] leading-[0.9] font-bold text-white tracking-tighter">
                                62%
                            </span>
                            <div className="text-[#D4AF37] text-sm md:text-base font-bold tracking-[0.3em] uppercase mt-4">
                                Ingredient Study Data
                            </div>
                        </div>

                        {/* The Explanation */}
                        <div className="max-w-2xl text-center md:text-right">
                            <p className="text-xl md:text-2xl text-gray-200 font-light leading-snug">
                                "62 percent of men experienced no additional hair loss in a one year study using a 5 percent minoxidil solution."
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

