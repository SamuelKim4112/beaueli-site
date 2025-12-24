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
        <section className="relative w-full bg-[#050505] overflow-hidden">
            {/* Desktop: Premium Split Layout (50/50) */}
            <div className="relative min-h-[calc(100vh-3.5rem)] w-full flex flex-col md:flex-row">

                {/* Left Side: Content (Desktop 50% / Mobile Bottom) */}
                <div className="relative w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-0 bg-[#050505] order-2 md:order-1 z-10">
                    {/* Golden Glow Spot */}
                    <div className="absolute left-[-20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        className="max-w-xl"
                    >
                        {/* Authority Badge */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm mb-6"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">NEW STANDARD IN HAIR GROWTH</span>
                        </motion.div>

                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-extrabold tracking-tighter text-white uppercase leading-[0.9] mb-8 drop-shadow-2xl"
                        >
                            Stop Losing. <br />
                            <span className="text-[#D4AF37]">Start Growing.</span>
                        </motion.h1>
                        <motion.div
                            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                            className="flex flex-col gap-4 border-l-4 border-solid border-[#D4AF37] pl-6 mb-10"
                        >
                            <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                                End Hair Loss Anxiety. Begin Recovery.
                            </p>
                            <p className="text-sm md:text-base text-gray-400 italic font-light">
                                "Stop chasing miracles. Turn to a trusted solution designed for men and women in their 30s to 50s."
                            </p>
                        </motion.div>


                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" className="h-14 px-12 text-base font-bold bg-[#D4AF37] hover:bg-[#B5952F] text-black tracking-widest uppercase rounded-sm transition-all w-full sm:w-auto shadow-lg border-none" asChild>
                                <a href="#products">Start Your Routine</a>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-12 text-base font-bold border-white/20 text-white hover:bg-white/10 tracking-widest uppercase rounded-sm transition-all w-full sm:w-auto" asChild>
                                <a href="#science">View The Science</a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Side: Image (Desktop 50% / Mobile Top) */}
                {/* REVERTED TO DARK MODE + ASPECT RATIO FIX */}
                <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-auto md:h-auto bg-[#111] order-1 md:order-2 overflow-hidden flex items-end justify-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={heroImages[currentImageIndex]}
                                alt="Confident lifestyle result"
                                fill
                                className="object-cover object-[center_top] md:object-center opacity-100"
                                priority
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Desktop Gradient: Seamless Blend from Text (Left) to Image */}
                    <div className="hidden md:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>

                    {/* Mobile Gradient: Seamless Blend from Text (Bottom) to Image */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent md:hidden z-10"></div>
                </div>

            </div>

            {/* Trusted Authority Marquee */}
            <div className="w-full bg-[#111] border-y border-white/5 py-6 overflow-hidden relative z-20">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Trusted By Men Featured In</p>
                    <div className="flex gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Text Logos for authority (keeping it simple and performant) */}
                        <span className="text-lg md:text-xl font-serif text-white font-bold">GQ</span>
                        <span className="text-lg md:text-xl font-sans text-white font-bold tracking-tighter">Men&apos;s Health</span>
                        <span className="text-lg md:text-xl font-serif text-white font-bold italic">Forbes</span>
                        <span className="text-lg md:text-xl font-sans text-white font-bold uppercase">Esquire</span>
                        <span className="text-lg md:text-xl font-serif text-white font-bold">VOGUE</span>
                    </div>
                </div>
            </div>
        </section >
    );
}
