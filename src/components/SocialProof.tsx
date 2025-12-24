"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const RESULTS = [
    {
        id: "male-1",
        before: "/ba1_before.jpg",
        after: "/ba1_after.jpg",
        label: "Top View",
        quote: "A gradual change in hair density visible around the crown and hairline with consistent daily application.",
        author: "Daniel K.",
        initial: "D"
    },
    {
        id: "male-2",
        before: "/ba2_before.jpg",
        after: "/ba2_after.jpg",
        label: "Crown View",
        quote: "Designed to support healthier-looking hair over time. Noticeable filling of the crown area.",
        author: "Beaueli User",
        initial: "B"
    },
    {
        id: "female-1",
        before: "/ba3_before.jpg",
        after: "/ba3_after.jpg",
        label: "Parting Line",
        quote: "Significant improvement in parting density and overall volume. Consistent application shows progress.",
        author: "Sarah M.",
        initial: "S"
    },
    {
        id: "female-2",
        before: "/ba6_before.jpg",
        after: "/ba6_after.jpg",
        label: "Edges & Hairline",
        quote: "Visibly fuller edges and reduced scalp visibility. A confidence-restoring change.",
        author: "Jasmine T.",
        initial: "J"
    }
]

export function SocialProof() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-rotate every 6 seconds. Resets whenever currentIndex changes (manual or auto).
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % RESULTS.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [currentIndex])

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % RESULTS.length)
    }, [])

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + RESULTS.length) % RESULTS.length)
    }, [])

    const item = RESULTS[currentIndex]

    return (
        <section id="reviews" className="py-20 md:py-32 bg-[#050505] overflow-hidden w-full relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-20 mx-auto max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-6">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-px w-8 md:w-12 bg-[#D4AF37]"></div>
                            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">Real Journeys</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-serif font-medium tracking-tight text-white mb-6 md:mb-8 uppercase leading-tight">
                        Before & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F59E0B]">After</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed tracking-wide px-4">
                        Visual examples of individual progress. Results vary.
                    </p>
                </div>

                <div className="min-h-[600px] relative px-0 md:px-16">
                    {/* Navigation Buttons (Desktop) */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300 hidden md:flex backdrop-blur-sm group"
                        aria-label="Previous result"
                    >
                        <ChevronLeft className="w-6 h-6 text-white group-hover:text-black" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300 hidden md:flex backdrop-blur-sm group"
                        aria-label="Next result"
                    >
                        <ChevronRight className="w-6 h-6 text-white group-hover:text-black" />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="flex flex-col gap-6 md:gap-8">
                                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 md:p-10 text-center flex flex-col items-center">
                                    <p className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed mb-6 italic opacity-90 max-w-2xl">
                                        "{item.quote}"
                                    </p>
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-sm md:text-base">
                                            {item.initial}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-sm md:text-lg font-bold text-white tracking-wide">{item.author}</div>
                                            <div className="text-xs md:text-sm text-[#D4AF37] uppercase tracking-wider">{item.label}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 md:gap-8">
                                    {/* Before */}
                                    <div className="relative aspect-square bg-[#0F0F0F] rounded-2xl overflow-hidden border border-white/10 group">
                                        <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10 bg-black/60 backdrop-blur-md px-2 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest border border-white/10 rounded-full">
                                            Before
                                        </div>
                                        <Image
                                            src={item.before}
                                            alt={`Before hair growth treatment - ${item.label}`}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* After */}
                                    <div className="relative aspect-square bg-[#0F0F0F] rounded-2xl overflow-hidden border border-white/10 group">
                                        <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10 bg-[#D4AF37] px-2 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold text-black uppercase tracking-widest rounded-full shadow-lg">
                                            After
                                        </div>
                                        <Image
                                            src={item.after}
                                            alt={`After hair growth treatment - ${item.label}`}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination Indicators - Now Mapped to RESULTS */}
                    <div className="flex justify-center gap-4 mt-12 md:mt-16">
                        {/* Mobile Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 flex md:hidden items-center justify-center rounded-full bg-white/5 border border-white/10"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>

                        {RESULTS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentIndex(idx)
                                }}
                                aria-label={`Go to result ${idx + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-500 mt-4 md:mt-0 ${currentIndex === idx
                                    ? "w-12 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                                    : "w-2 bg-white/10 hover:bg-white/30"
                                    }`}
                            />
                        ))}

                        <button
                            onClick={handleNext}
                            className="w-10 h-10 flex md:hidden items-center justify-center rounded-full bg-white/5 border border-white/10"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
