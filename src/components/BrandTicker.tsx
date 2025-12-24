"use client";

import { motion } from "framer-motion";

export function BrandTicker() {
    const messages = [
        "DERMATOLOGIST RECOMMENDED",
        "SCIENCE BACKED FORMULA",
        "FOR MEN & WOMEN",
        "CRUELTY FREE",
        "DERMATOLOGIST RECOMMENDED",
        "SCIENCE BACKED FORMULA",
        "FOR MEN & WOMEN",
        "CRUELTY FREE",
    ];

    return (
        <section className="bg-black py-4 border-t border-b border-white/10 overflow-hidden flex relative z-20">
            <div className="absolute inset-0 bg-[#F3D55A]/5 pointer-events-none"></div>
            <motion.div
                className="flex gap-24 pr-24 whitespace-nowrap"
                animate={{
                    x: "-50%",
                }}
                transition={{
                    duration: 120,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
            >
                {[...messages, ...messages].map((text, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <span className="text-gray-400 font-medium tracking-[0.25em] text-xs md:text-sm uppercase flex items-center hover:text-white transition-colors">
                            <span className="w-1 h-1 rounded-full bg-[#D4AF37] mr-6 inline-block shadow-[0_0_8px_#D4AF37]"></span>
                            {text}
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
