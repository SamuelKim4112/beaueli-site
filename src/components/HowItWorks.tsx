import { Clock, Droplets, RotateCcw } from "lucide-react"
import Image from "next/image"

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 md:py-32 bg-[#050505] w-full relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute left-0 top-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute right-0 bottom-1/4 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
                        Simple Routine. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F59E0B]">Visible Progress.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
                        Consistency is key. Apply once or twice daily to see visible changes in as little as 3 months.
                    </p>
                </div>

                {/* Steps Grid (Simple Routine) */}
                <div className="grid gap-8 md:grid-cols-3 mb-32 max-w-7xl mx-auto">
                    {[
                        {
                            image: "/routine_apply.png",
                            icon: Droplets,
                            title: "1. Apply Serum",
                            desc: "Apply 1ml of Minoxidil directly to the scalp areas where you want to see growth."
                        },
                        {
                            image: "/routine_roller.png",
                            icon: RotateCcw,
                            title: "2. Activate",
                            desc: "Use the Derma Roller once a week to boost absorption and stimulate follicles."
                        },
                        {
                            image: "/routine_habit.png",
                            icon: Clock,
                            title: "3. Be Consistent",
                            desc: "Make it a habit. Changes typically start to appear between months 3 and 6."
                        }
                    ].map((step, i) => (
                        <div key={i} className="group flex flex-col items-center text-center bg-[#111] rounded-2xl md:rounded-3xl shadow-lg border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-1 hover:border-[#D4AF37]/30">
                            <div className="w-full aspect-square relative bg-[#050505]">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain p-6 md:p-8 transition-transform duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 md:p-8 relative w-full">
                                <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 mx-auto -mt-14 relative z-10 shadow-lg group-hover:border-[#D4AF37] transition-colors">
                                    <step.icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif font-bold text-lg md:text-xl mb-3 text-white group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline Grid (What to Expect) */}
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h3 className="text-4xl font-bold text-white mb-4">What to Expect</h3>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Hair care is a journey. Here is what users may observe when using Beaueli consistently.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Mobile: Hidden, Desktop: Visible) */}
                        <div className="hidden md:block absolute top-[20%] left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-[#D4AF37]/50 to-gray-800 -z-10 transform -translate-y-1/2 rounded-full"></div>

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="group flex flex-col bg-[#111] rounded-[2rem] border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:-translate-y-2 relative pt-8">
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#000] text-gray-400 border border-gray-700 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-20">1</div>
                                <div className="w-full aspect-[4/3] relative bg-black/20 border-b border-white/5">
                                    <Image
                                        src="/timeline_shedding.png"
                                        alt="Early Use Phase"
                                        fill
                                        className="object-contain p-8 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="p-8 text-center pt-10">
                                    <h4 className="font-bold text-xl mb-3 text-white">Early Use Phase</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        <strong className="text-[#D4AF37] block mb-1">Initial Transition.</strong> Old hairs may shed to make room for new growth. This is a common part of the process.
                                    </p>
                                </div>
                            </div>

                            <div className="group flex flex-col bg-[#1A1A1A] rounded-[2rem] border border-[#D4AF37]/30 overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:-translate-y-2 relative pt-8 transform scale-105 z-10">
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#D4AF37] text-black rounded-full flex items-center justify-center font-bold text-base shadow-lg z-20">2</div>
                                <div className="w-full aspect-[4/3] relative bg-[#D4AF37]/5 border-b border-white/5 p-10">
                                    <Image
                                        src="/timeline_growth.png"
                                        alt="Ongoing Use Phase"
                                        fill
                                        className="object-contain p-4 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8 text-center pt-12">
                                    <h4 className="font-extrabold text-2xl mb-4 text-white">Ongoing Use Phase</h4>
                                    <p className="text-gray-300 leading-relaxed text-base font-medium">
                                        <strong className="text-[#D4AF37] block mb-2 text-lg">Reactivation.</strong> With consistent use, follicles may begin to reactivate and support new growth.
                                    </p>
                                </div>
                            </div>

                            <div className="group flex flex-col bg-[#111] rounded-[2rem] border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:-translate-y-2 relative pt-8">
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#000] text-gray-400 border border-gray-700 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-20">3</div>
                                <div className="w-full aspect-[4/3] relative bg-black/20 border-b border-white/5">
                                    <Image
                                        src="/timeline_thick.png"
                                        alt="Long Term Maintenance"
                                        fill
                                        className="object-contain p-8 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="p-8 text-center pt-10">
                                    <h4 className="font-bold text-xl mb-3 text-white">Long Term</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        <strong className="text-[#D4AF37] block mb-1">Maintenance.</strong> Continued application helps maintain density and supports healthier looking hair.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
