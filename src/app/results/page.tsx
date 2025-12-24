import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Calendar, ArrowRight, ShieldCheck, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Real Hair Regrowth Results | Clinically Proven Before and After",
    description: "See verified 3-month and 6-month hair regrowth results. Documented evidence of Minoxidil's effectiveness for receding hairlines and crown thinning.",
    alternates: {
        canonical: "./",
    },
};

const reviews = [
    {
        name: "David K.",
        age: "34",
        concern: "Crown Thinning",
        text: "I noticed my crown thinning and panicked. Started the Beaueli regimen and honestly, the photos speak for themselves. The density is significantly improved after 3 months.",
        image: "/review_ba_2.jpg",
        period: "3 Months",
        alt: "Before and After Hair Regrowth Result - Male Crown Pattern",
        maskTop: "33%"
    },
    {
        name: "James T.",
        age: "41",
        concern: "Receding Hairline",
        text: "Minoxidil really works if you stick with it. My hairline was receding fast, but 6 months of this kit halted the recession and brought back the edge density.",
        image: "/review_ba_3.jpg",
        period: "6 Months",
        alt: "Before and After Hair Restoration - Male Receding Hairline",
        maskTop: "40%"
    },
    {
        name: "Sarah M.",
        age: "29",
        concern: "Stress Shedding / Part Line",
        text: "After stress-related shedding, my part line was getting so wide. This saved my hair. It's fuller and healthier than it's been in years.",
        image: "/review_ba_4.jpg",
        period: "4 Months",
        alt: "Before and After Hair Volume Restoration - Female Part Line",
        maskTop: null
    },
    {
        name: "Michael R.",
        age: "27",
        concern: "Patchy Beard",
        text: "I was skeptical about growth products, but this actually filled in my patches. Consistency is key, but the results are undeniable.",
        image: "/review_ba_1.jpg",
        period: "5 Months",
        alt: "Before and After Facial Hair Growth - Patchy Beard Filling",
        maskTop: null
    },
];

export default function ResultsPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            {/* 1. H1 Hero: Trust & Authority */}
            <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 center w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
                <div className="container px-4 mx-auto relative z-10 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-6">
                        <TrendingUp className="h-4 w-4 text-[#D4AF37]" />
                        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Documented Outcomes</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
                        Real, Clinically Proven <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D55A]">Hair Regrowth Results.</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        See the difference clinically backed ingredients make. These are verified reports from users who committed to the 90-day recovery protocol.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#C29D00] font-bold tracking-widest uppercase" asChild>
                            <Link href="/#products">Start Your Journey</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Measurement Impact & Timeline */}
            <section className="py-20 md:py-24 bg-[#0F0F0F]">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif mb-4">The 90-Day Regrowth Timeline</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Hair recovery is a biological process. Here is the clinical timeline for expected results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-white/10 z-0"></div>

                        {[
                            {
                                time: "Month 1",
                                title: "Stabilization",
                                desc: "Shedding may temporarily increase as old hairs make way for new growth. This is a sign the treatment is working."
                            },
                            {
                                time: "Month 3",
                                title: "Reactivation",
                                desc: "Initial soft growth (vellus hair) appears. Shedding decreases significantly as follicles enter the Anagen phase."
                            },
                            {
                                time: "Month 6",
                                title: "Density & Strength",
                                desc: "Hairs thicken and become pigmented. Visible coverage improves as terminal hairs replace thin ones."
                            }
                        ].map((phase, i) => (
                            <div key={i} className="relative z-10 bg-[#0A0A0A] p-8 rounded-2xl border border-white/10 text-center hover:border-[#D4AF37]/30 transition duration-300">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/20 text-[#D4AF37] font-bold mb-6">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{phase.time}: {phase.title}</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Case Studies (Outcomes) */}
            <section className="py-24">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-serif mb-4">Real User Outcomes</h2>
                            <p className="text-gray-400 max-w-lg">
                                Verified before-and-after results showing effective regrowth for various hair loss patterns.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                            <Microscope className="h-4 w-4" />
                            <span>Clinical Observation</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {reviews.map((review, i) => (
                            <div key={i} className="bg-[#0F0F0F] rounded-2xl border border-white/5 overflow-hidden group hover:border-[#D4AF37]/30 transition duration-500">
                                {/* Image Container */}
                                <div className="relative aspect-[3/2] w-full bg-black">
                                    <Image
                                        src={review.image}
                                        alt={review.alt}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 transition duration-500"
                                    />
                                    {/* Privacy Mask */}
                                    {review.maskTop && (
                                        <div
                                            className="absolute w-full h-[12%] bg-black/10 backdrop-blur-md z-[5] pointer-events-none"
                                            style={{
                                                top: review.maskTop,
                                                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                                            }}
                                        ></div>
                                    )}
                                    {/* Verification Badge */}
                                    <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] border-l-2 border-[#D4AF37]">
                                        {review.period} Result
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{review.name}</h3>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{review.concern} • Age {review.age}</div>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <TrendingUp key={i} className="h-3 w-3 text-[#D4AF37]" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-300 font-light leading-relaxed text-sm mb-6 border-l border-white/10 pl-4">
                                        "{review.text}"
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                                        Verified Purchase
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Measurement Criteria */}
            <section className="py-20 bg-[#0F0F0F] border-t border-white/5">
                <div className="container px-4 mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-serif mb-12">Our Efficacy Standards</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="p-8 rounded-xl border border-white/10 bg-black/50">
                            <h3 className="text-xl font-bold text-white mb-3">Visible Density</h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                We define success by visible reduction in scalp visibility and increased hair counts per square centimeter, not just subjective "feeling."
                            </p>
                        </div>
                        <div className="p-8 rounded-xl border border-white/10 bg-black/50">
                            <h3 className="text-xl font-bold text-white mb-3">Strand Thickness</h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                True reversal of miniaturization means seeing terminal (thick) hairs replace vellus (thin/wispy) hairs over 3-6 months.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Area */}
            <section className="py-20 bg-[#D4AF37] text-black text-center">
                <div className="container px-4 mx-auto max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Start Your Transformation</h2>
                    <p className="mb-8 font-medium text-lg leading-relaxed">
                        Join thousands of men and women reclaiming their confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-black text-white hover:bg-gray-800 border-none px-10 py-8 rounded-none uppercase tracking-[0.2em] font-bold text-sm" asChild>
                            <Link href="/#products">
                                Get The Kit <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-black/20 text-black hover:bg-black/5 px-10 py-8 rounded-none uppercase tracking-[0.2em] font-bold text-sm" asChild>
                            <Link href="/science">How It Works</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
