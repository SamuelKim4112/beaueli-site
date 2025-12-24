"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CallToAction() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <section ref={ref} className="py-32 bg-[#050505] text-white relative overflow-hidden border-t border-white/5 min-h-[600px] flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity: 0.4 }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
            >
                <div className="absolute inset-0 bg-[url('/popup_bg_molecular.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
            </motion.div>

            {/* Glowing Orbs for depth */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#E6B800]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E6B800]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2"></div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white max-w-4xl mx-auto leading-[0.9] uppercase drop-shadow-2xl">
                        Ready to start <br className="hidden md:block" /> your routine?
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-12 uppercase tracking-tight">
                        Start your journey today.
                    </p>

                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join others who have chosen a science backed approach to hair recovery. <br />
                        Formulas delivered to your door.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="h-16 px-16 text-lg font-bold bg-[#D4AF37] hover:bg-[#B4941F] text-black hover:text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all rounded-full uppercase tracking-widest scale-100 duration-300" asChild>
                            <a href="#products">Get Started</a>
                        </Button>
                    </div>
                    <p className="mt-8 text-xs text-[#D4AF37]/60 font-bold tracking-widest uppercase">
                        Free shipping • Cancel anytime
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
