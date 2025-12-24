import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, AlertCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Understanding Hair Loss: A Complete Guide | Beaueli",
    description: "Why am I losing hair? Explore the causes of Male Pattern Baldness (Androgenic Alopecia) and how to identify early signs of thinning.",
    alternates: {
        canonical: "./",
    },
};

export default function HairLossGuidePage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            {/* Header */}
            <header className="py-20 md:py-32 border-b border-white/5 relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-4xl text-center relative z-10">
                    <p className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase mb-4">Beaueli Educational Series</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8">
                        Why Am I <br />
                        <span className="text-gray-500">Losing Hair?</span>
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Hair loss is complex, but the science is clear. <br />
                        Understanding the root cause is the first step to recovery.
                    </p>
                </div>
            </header>

            {/* Content Body */}
            <article className="py-20 container px-4 mx-auto max-w-3xl">

                {/* Section 1: The Culprit */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertCircle className="text-[#D4AF37]" />
                        <h2 className="text-2xl font-bold">The Main Culprit: DHT</h2>
                    </div>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-gray-400 font-light leading-loose">
                            For most men (and many women), hair loss is genetic. It's called <strong>Androgenic Alopecia</strong>.
                            It happens when your body converts Testosterone into a molecule called <strong>DHT</strong> (Dihydrotestosterone).
                        </p>
                        <p className="text-gray-400 font-light leading-loose mt-4">
                            DHT attacks your hair follicles, causing them to shrink. This process is called <em>miniaturization</em>.
                            Eventually, the follicle becomes so small it can no longer produce a visible hair, leading to baldness.
                        </p>
                    </div>
                </section>

                <hr className="border-white/10 my-12" />

                {/* Section 2: Early Signs */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <HelpCircle className="text-[#D4AF37]" />
                        <h2 className="text-2xl font-bold">Early Signs of Thinning</h2>
                    </div>
                    <ul className="grid gap-4">
                        {[
                            { title: "Receding Hairline", desc: "The classic 'M' shape appearing at the forehead." },
                            { title: "Crown Thinning", desc: "Seeing more scalp on the top/back of your head under bright light." },
                            { title: "Excessive Shedding", desc: "Finding more hair than usual on your pillow or in the shower drain." }
                        ].map((sign, i) => (
                            <li key={i} className="bg-white/5 p-6 rounded-lg border border-white/5">
                                <h3 className="font-bold text-white mb-2">{sign.title}</h3>
                                <p className="text-gray-400 font-light text-sm">{sign.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* CTA Section */}
                <div className="bg-[#D4AF37] text-black p-10 rounded-2xl text-center">
                    <h3 className="text-2xl font-serif font-bold mb-4">Can it be stopped?</h3>
                    <p className="mb-8 max-w-lg mx-auto leading-relaxed font-medium">
                        Yes. Minoxidil is clinically proven to reverse miniaturization by increasing blood flow to the follicle. The earlier you start, the more you save.
                    </p>
                    <Button size="lg" className="bg-black text-white hover:bg-gray-800 border-none px-8 py-6 rounded-none uppercase tracking-widest font-bold" asChild>
                        <Link href="/#products">
                            Start Recovery <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

            </article>
        </main>
    )
}
