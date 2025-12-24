"use client"

import { Target, Microscope, Heart, Lightbulb } from "lucide-react"

export function AboutUs() {
    return (
        <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03),transparent_60%)] pointer-events-none"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                {/* Header */}
                {/* Header - Centered & Elegant */}
                <div className="text-center mb-20">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] border border-[#D4AF37]/20 px-4 py-2 rounded-full bg-[#D4AF37]/5">
                        Brand Story
                    </span>
                    <h2 className="text-3xl md:text-6xl font-serif text-white mt-8 md:mt-10 mb-6 md:mb-6 tracking-wide">
                        About <span className="text-[#D4AF37]">Us.</span>
                    </h2>
                    <div className="w-px h-20 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto mt-10 opacity-50"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 md:gap-12 max-w-7xl mx-auto">

                    {/* 1. Who We Are - The Foundation */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-3xl border border-white/5 group-hover:border-[#D4AF37]/30 transition-colors duration-500"></div>

                        <div className="relative p-10 md:p-14 h-full flex flex-col">
                            <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-gold-glow">
                                <Microscope className="w-8 h-8" />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Who We Are</h3>

                            <p className="text-gray-400 text-lg leading-loose mb-16 md:mb-12 font-light max-w-prose">
                                Beaueli is a dedicated hair care brand, created for men and women in their 30s to 50s who are optimizing their hair health.
                                <br /><br />
                                We focus on trusted ingredients and prioritize consistency over trends, offering simple routines that fit naturally into everyday life.
                            </p>

                            {/* Infographic Points */}
                            <div className="grid grid-cols-1 gap-6 mt-auto">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <Target className="w-5 h-5 text-[#D4AF37] mt-1 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Targeted Specialist</h4>
                                        <p className="text-gray-500 text-sm">Dedicated specifically to 30s-50s demographic needs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <Lightbulb className="w-5 h-5 text-[#D4AF37] mt-1 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Clarity First</h4>
                                        <p className="text-gray-500 text-sm">Transparent labeling and honest communication about what to expect.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Our Mission - The Goal */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-3xl border border-white/5 group-hover:border-[#D4AF37]/30 transition-colors duration-500"></div>

                        <div className="relative p-10 md:p-14 h-full flex flex-col">
                            <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-gold-glow">
                                <Heart className="w-8 h-8" />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Our Mission</h3>

                            <p className="text-gray-400 text-lg leading-loose mb-12 font-light max-w-prose">
                                Our goal is to provide visible improvement and renewed confidence, not just basic maintenance.
                                <br /><br />
                                Beaueli delivers practical solutions designed for easy daily use, helping you care for your hair with clarity and confidence.
                            </p>

                            {/* Infographic Points */}
                            <div className="grid grid-cols-1 gap-6 mt-auto">
                                <div className="flex items-center gap-6 p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-3xl font-serif text-[#D4AF37]">100%</span>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest text-center">Clarity</span>
                                    </div>
                                    <div className="w-px h-10 bg-white/10"></div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Helping you care for your hair with clarity and confidence.
                                    </p>
                                </div>

                                <blockquote className="p-6 border-l-2 border-[#D4AF37] bg-gradient-to-r from-white/5 to-transparent rounded-r-xl italic text-gray-400 text-sm">
                                    "Practical solutions that fit naturally into everyday life."
                                </blockquote>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
