"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "/hero-hyper-real.png"
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-[85dvh] md:min-h-[800px] overflow-hidden bg-[#050505] flex items-end md:items-center">

            {/* 1. Background (Clean Dark Base) */}
            <div className="absolute inset-0 bg-[#050505] z-0 pointer-events-none"></div>

            {/* 2. Hero Image with Seamless Blending */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.0, ease: "easeInOut" }}
                    className="absolute inset-0 md:left-auto md:right-0 md:w-[70%] h-full z-0"
                >
                    {/* Desktop Gradients - Soft Edge Blending */}
                    <div className="hidden md:block absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent z-10 pointer-events-none"></div>

                    {/* Specific Edge Masks (Fixing Hard Cuts) */}
                    <div className="hidden md:block absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-transparent z-20 pointer-events-none"></div>
                    <div className="hidden md:block absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent z-20 pointer-events-none"></div>

                    {/* Mobile Gradients */}
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent z-20 md:hidden pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent z-20 md:hidden pointer-events-none"></div>

                    <div className="relative w-full h-full bg-[#050505]">
                        {/* Mobile Image: Tuned for Portrait (18% from top) */}
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt="Beaueli Hair Growth and Recovery Results - Confident Lifestyle"
                            fill
                            className="block md:hidden object-cover object-[53%_5%] opacity-100"
                            priority
                            quality={100}
                        />
                        {/* Desktop Image: Tuned for Landscape (Faces higher up) - 5% Top alignment for headroom */}
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt="Beaueli Hair Growth and Recovery Results - Confident Lifestyle"
                            fill
                            className="hidden md:block object-cover object-[55%_15%] opacity-100 contrast-[1.1] saturate-[1.1]"
                            priority
                            quality={100}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* 3. Text Content (High Contrast, Left Aligned) */}
            <div className="relative z-20 w-full max-w-[1920px] mx-auto px-6 md:px-12 flex items-end md:items-center h-full pb-24 md:pb-32 pt-32 md:pt-32">
                <div className="w-full md:max-w-4xl flex flex-col justify-end md:justify-center pl-0 md:pl-20">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                            }
                        }}
                    >
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 md:mb-10 w-fit mx-auto md:mx-0"
                        >
                            <span className="flex h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></span>
                            <span className="text-[10px] md:text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em]">New Standard in Hair Growth</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-white mb-8 md:mb-6"
                        >
                            Stop Losing. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] animate-gradient-x">
                                Start Growing.
                            </span>
                        </motion.h1>

                        {/* Grouping H2 and P with vertical accent line */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="border-l-2 border-[#D4AF37] pl-6 md:pl-8 mb-12 md:mb-16"
                        >
                            <h2 className="text-xl md:text-3xl font-light text-white/90 mb-6 md:mb-8 tracking-wide leading-relaxed">
                                End Hair Loss Anxiety. Begin Recovery.
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 max-w-lg md:max-w-xl leading-loose font-light">
                                "Stop chasing miracles. Turn to a science backed solution designed for men and women in their 30s to 50s."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4"
                        >
                            <a
                                href="#products"
                                className="w-full sm:w-auto px-8 py-5 sm:py-4 bg-[#D4AF37] hover:bg-[#B5952F] text-black font-semibold tracking-wide transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center"
                            >
                                Start Your Routine
                            </a>
                            <a
                                href="#science"
                                className="w-full sm:w-auto px-8 py-5 sm:py-4 border border-white/20 hover:border-[#D4AF37]/50 hover:bg-white/5 text-white font-medium tracking-wide transition-all duration-300 backdrop-blur-sm text-center"
                            >
                                View The Science
                            </a>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            className="mt-6 flex items-center justify-center md:justify-start gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-medium"
                        >
                            <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span> No subscription required</span>
                            <span className="hidden sm:inline text-gray-700">|</span>
                            <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span> Dermatologist Reviewed</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Bottom Fade Desktop */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
        </section >
    );
}
