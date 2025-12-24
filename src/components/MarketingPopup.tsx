"use client";

import { useState, useEffect } from "react";
import { X, Gift, Check } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function MarketingPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [dontShowToday, setDontShowToday] = useState(false);

    useEffect(() => {
        // Check if suppression is active
        const nextShowTime = localStorage.getItem("beaueli_popup_next_show");
        if (nextShowTime && Date.now() < parseInt(nextShowTime)) {
            return;
        }

        // Check current session to prevent annoyance on every refresh if simply closed
        const sessionSeen = sessionStorage.getItem("beaueli_popup_session_seen");
        if (sessionSeen) return;

        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
            sessionStorage.setItem("beaueli_popup_session_seen", "true");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        if (dontShowToday) {
            // Suppress for 24 hours
            const nextShow = Date.now() + 24 * 60 * 60 * 1000;
            localStorage.setItem("beaueli_popup_next_show", nextShow.toString());
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-500">
            <div className="bg-[#111] rounded-3xl shadow-2xl max-w-sm w-full relative overflow-hidden animate-in zoom-in-95 duration-500 border border-[#D4AF37]/20 group">

                {/* Premium Animated Background */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0.5 }}
                        animate={{
                            scale: 1.2,
                            rotate: [0, 2, 0, -2, 0],
                            x: [0, 10, 0, -10, 0]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        className="w-full h-full"
                    >
                        <Image
                            src="/popup_bg_molecular.png"
                            alt="Background"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 bg-black/20 p-1 rounded-full backdrop-blur-md"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Decorative Top */}
                <div className="h-28 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/20 to-transparent"></div>
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-black/80 rounded-full p-4 shadow-[0_0_30px_rgba(212,175,55,0.3)] relative z-10 border border-[#D4AF37]/50 mt-4"
                    >
                        <Gift className="h-8 w-8 text-[#D4AF37]" />
                    </motion.div>
                </div>

                <div className="px-8 pb-8 pt-2 text-center relative z-10">
                    {!submitted ? (
                        <>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Wait! Get 30% Off</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                Unlock your exclusive discount code for your first Hair Growth Kit.
                            </p>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setSubmitted(true);
                                }}
                                className="space-y-4"
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full h-12 rounded-lg border border-white/10 px-4 text-sm focus:outline-none focus:border-[#D4AF37] bg-white/5 text-white font-medium placeholder:text-gray-500 backdrop-blur-sm transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-[#D4AF37] hover:bg-[#B4941F] text-black font-bold rounded-lg uppercase tracking-wide shadow-lg hover:shadow-[#D4AF37]/20 transition-all"
                                >
                                    Reveal My Code
                                </Button>

                                <div className="flex items-center justify-center gap-2 mt-4 pt-2 border-t border-white/5">
                                    <label className="flex items-center gap-2 cursor-pointer group/check">
                                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${dontShowToday ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-gray-600 group-hover/check:border-[#D4AF37]'}`}>
                                            {dontShowToday && <Check className="h-3 w-3 text-black" />}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={dontShowToday}
                                            onChange={(e) => setDontShowToday(e.target.checked)}
                                        />
                                        <span className="text-xs text-gray-500 group-hover/check:text-gray-400 transition-colors">
                                            Don&apos;t show again today
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 py-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">You&apos;re In!</h3>
                                <p className="text-gray-400 text-sm">Use code below at checkout:</p>
                            </div>
                            <div className="bg-[#1A1A1A]/80 border border-dashed border-[#D4AF37]/50 rounded-lg p-4 font-mono text-xl font-bold text-[#D4AF37] tracking-widest select-all shadow-inner">
                                GROWTH30
                            </div>
                            <Button
                                onClick={handleClose}
                                className="w-full h-12 bg-white hover:bg-gray-200 text-black font-bold rounded-lg transition-colors"
                            >
                                Shop Now
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
