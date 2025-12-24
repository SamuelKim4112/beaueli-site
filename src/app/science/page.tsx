import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FlaskConical, Dna, Activity, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Clinically Proven Hair Growth Science | FDA Approved Ingredients",
    description: "Discover the science behind Beaueli's hair loss recovery system. Learn how Minoxidil and Biotin work together to reactivate dormant follicles.",
    alternates: {
        canonical: "./",
    },
};

export default function SciencePage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            {/* 1. H1 Hero Section: Search Intent Alignment */}
            <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 center w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
                <div className="container px-4 mx-auto relative z-10 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-6">
                        <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Clinically Proven Efficacy</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
                        The Science of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D55A]">Hair Regrowth & Recovery.</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        Hair recovery isn't magic—it's biology. Beaueli utilizes <strong>FDA-approved Minoxidil</strong> to scientifically intervene in the hair growth cycle, transitioning follicles from dormant states to active regrowth.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#C29D00] font-bold tracking-widest uppercase" asChild>
                            <Link href="/#products">Start Recovery</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 tracking-widest uppercase" asChild>
                            <Link href="/#results">View Results</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Mechanism Section: H2/H3 Hierarchy */}
            <section className="py-20 md:py-24">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-serif">FDA-Approved Regrowth: How It Works</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Activity className="h-5 w-5 text-[#D4AF37]" />
                                        Vasodilation Mechanism
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        Minoxidil acts as a potassium channel opener. When applied topically, it widens blood vessels around the follicle, significantly increasing blood flow, oxygen, and nutrient delivery.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Dna className="h-5 w-5 text-[#D4AF37]" />
                                        Follicular Reactivation
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        This surge in nutrients effectively "wakes up" dormant follicles that have shrunk due to miniaturization, pushing them back into the active growth phase.
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-4 pt-4 border-t border-white/5">
                                {[
                                    "Clinically proven to reverse vertical miniaturization",
                                    "FDA-approved for male and female pattern baldness",
                                    "Safe for daily topical application"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="h-5 w-5 text-[#D4AF37] mt-1 shrink-0" />
                                        <span className="text-gray-300 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Visual Aid */}
                        <div className="relative aspect-square bg-[#0F0F0F] rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center group shadow-2xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15),_transparent_70%)] opacity-60 group-hover:opacity-100 transition duration-700"></div>
                            <FlaskConical className="h-32 w-32 text-[#D4AF37] opacity-90 relative z-10" />
                            <div className="absolute bottom-8 left-0 right-0 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Clinical Standard</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Hair Growth Cycle: Educational Authority */}
            <section className="py-20 bg-[#0F0F0F] border-y border-white/5">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif mb-4">Understanding the Hair Growth Cycle</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Hair growth is cyclical. Effective recovery requires understanding specific biological phases.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Anagen Phase",
                                subtitle: "Growth (2-7 Years)",
                                desc: "The active phase where hair is produced. Minoxidil prolongs this phase to maximize length and thickness.",
                                icon: <TrendingUp className="h-6 w-6" />
                            },
                            {
                                title: "2. Catagen Phase",
                                subtitle: "Transition (2-3 Weeks)",
                                desc: "The follicle shrinks and detaches from blood supply. Our goal is to minimize premature entry into this phase.",
                                icon: <Activity className="h-6 w-6" />
                            },
                            {
                                title: "3. Telogen Phase",
                                subtitle: "Resting (3 Months)",
                                desc: "The hair falls out and the follicle rests. Treatment stimulates the follicle to exit this phase and return to Anagen.",
                                icon: <CheckCircle2 className="h-6 w-6" />
                            }
                        ].map((phase, i) => (
                            <div key={i} className="bg-black/50 p-8 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition duration-300 group">
                                <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition duration-300">{phase.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{phase.title}</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">{phase.subtitle}</p>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FAQ Schema for Rich Snippets */}
            <section className="py-24">
                <div className="container px-4 mx-auto max-w-3xl">
                    <h2 className="text-3xl font-serif text-center mb-12">Clinical FAQ</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Is Minoxidil clinically proven?",
                                a: "Yes. Minoxidil is the only FDA-approved topical ingredient clinically proven to regrow hair. Studies show it effectively halts hair loss and stimulates new growth in both men and women."
                            },
                            {
                                q: "How long does hair recovery take?",
                                a: "Hair growth is a biological process that cannot be rushed. Initial reduction in shedding is often seen at 2 months. Visible regrowth typically occurs between months 3-6. Consistent daily application is critical."
                            },
                            {
                                q: "Does this work for receding hairlines?",
                                a: "While Minoxidil is most famous for crown regrowth, it works by stimulating blood flow to any follicle. Many users report significant success with receding hairlines when treatment is started early."
                            }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-white/10 pb-6">
                                <h3 className="text-lg font-bold mb-3">{item.q}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>

                    {/* JSON-LD Structured Data */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Is Minoxidil clinically proven?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Minoxidil is the only FDA-approved topical ingredient clinically proven to regrow hair." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How long does hair recovery take?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Visible regrowth typically occurs between months 3-6. Consistent daily application is critical." }
                                    }
                                ]
                            })
                        }}
                    />
                </div>
            </section>

            {/* 5. Final CTA for Internal Linking */}
            <section className="py-20 bg-[#D4AF37] text-black text-center">
                <div className="container px-4 mx-auto max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Reactivate Your Growth?</h2>
                    <p className="mb-8 font-medium text-lg leading-relaxed">
                        The science is clear. The earlier you start, the more you save.
                    </p>
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 border-none px-10 py-8 rounded-none uppercase tracking-[0.2em] font-bold text-sm w-full md:w-auto" asChild>
                        <Link href="/#products">
                            Begin Treatment <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
