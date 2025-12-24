"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function Statement() {
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <section className="w-full bg-[#050505] border-y border-white/5 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

                {/* Left Image: Abstract Texture */}
                <div className="relative min-h-[300px] lg:min-h-full order-1 bg-black overflow-hidden group">
                    <div className="absolute inset-0 bg-[#1a1400] z-10 opacity-20 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none"></div>
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-70 contrast-[1.15] saturate-[1.1] brightness-[1.05]"
                    >
                        <source src="/beaueli_video1.mp4" type="video/mp4" />
                    </video>

                    {/* Sound Toggle Button */}
                    <button
                        onClick={toggleMute}
                        className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:bg-black/60 hover:border-[#D4AF37]/50 transition-all duration-300"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>


                </div>

                {/* Right Content: Editorial Story */}
                <div className="flex flex-col justify-center px-6 md:px-20 lg:px-32 py-16 md:py-24 order-2 bg-[#050505] relative z-10">
                    <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent hidden lg:block"></div>

                    {/* Background Bloom */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#1a1400_0%,_transparent_70%)] pointer-events-none opacity-50"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-8 md:w-12 bg-[#D4AF37]"></div>
                            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">Our Philosophy</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8 md:mb-10 tracking-tight">
                            NO MAGIC CURE. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D55A]">JUST SCIENCE.</span>
                        </h2>

                        <div className="space-y-8 max-w-lg">
                            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                                Stop chasing miracles. Turn to a science backed solution designed for men and women in their 30s to 50s.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
