import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#fafafa]">

            {/* Background Image Placeholder - using a subtle gradient or abstract shape if no image */}
            {/* In a real app, this would be a high-quality model shot */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10" />
                {/* Placeholder for the hero image */}
                <div className="absolute right-0 top-0 w-2/3 h-full bg-slate-100 opacity-50" />
            </div>

            <div className="container relative z-20 px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
                <div className="flex flex-col gap-6 max-w-xl">
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-900 shadow-sm w-fit">
                        Clinically Inspired
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
                        Stronger Lashes. <br />
                        <span className="text-gray-400">Fuller Brows.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground md:text-xl max-w-lg leading-relaxed">
                        Formulated with peptides and biotin to enhance density and length.
                        Visible results in as little as 4 weeks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Button size="lg" className="text-base">
                            Shop The Set
                        </Button>
                        <Button variant="ghost" size="lg" className="text-base group">
                            How it works <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                            ))}
                        </div>
                        <p>Trusted by 10,000+ customers</p>
                    </div>
                </div>

                {/* Visual focal point for desktop */}
                <div className="hidden md:block relative h-full min-h-[500px]">
                    {/* Placeholder for product bottle render */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 bg-gray-200 rounded-2xl shadow-2xl" />
                </div>
            </div>
        </section>
    );
}
