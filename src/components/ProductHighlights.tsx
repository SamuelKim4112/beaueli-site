
import { Button } from "@/components/ui/button"
import { Check, ShoppingCart, Sparkles } from "lucide-react"
import Image from "next/image"

export function ProductHighlights() {
    return (
        <section id="products" className="py-20 md:py-32 bg-black/50 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-16 mx-auto max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 md:mb-6">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-px w-8 md:w-12 bg-[#D4AF37]"></div>
                            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">Our Collection</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-white mb-6 uppercase leading-tight px-4">
                        Power your routine with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F59E0B]">5% Minoxidil and Biotin.</span>
                    </h2>
                    <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed px-4">
                        A simple blend that supports fuller looking hair.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Product 1 */}
                    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden hover:border-[#D4AF37]/30 transition-colors duration-500">
                        <div className="aspect-[4/5] relative bg-gradient-to-b from-[#111] to-black overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                            {/* Product Image Placeholder - Replace with actual image */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-colors duration-700 opacity-50"></div>
                                <Image
                                    src="/product-minoxidil.jpg"
                                    alt="Minoxidil 5% Hair Growth Serum"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>

                        <div className="p-8 border-t border-white/5">
                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Minoxidil 5% Hair Growth Serum</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed h-10">Advanced formula for targeted care. Helps improve follicle strength and vitality.</p>

                            <div className="flex items-center justify-between mt-auto">
                                <Button className="bg-[#D4AF37] text-black hover:bg-white hover:text-black border-none rounded-none px-8 tracking-widest text-xs font-bold uppercase transition-all duration-300 w-full md:w-auto" asChild>
                                    <a href="https://www.amazon.com/dp/B0CR6FM6L8" target="_blank" rel="noopener noreferrer">
                                        VIEW PRODUCT
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden hover:border-[#D4AF37]/30 transition-colors duration-500">
                        <div className="aspect-[4/5] relative bg-gradient-to-b from-[#111] to-black overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                            {/* Product Image Placeholder - Replace with actual image */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-colors duration-700 opacity-50"></div>
                                <Image
                                    src="/product-kit.jpg"
                                    alt="Minoxidil 5% Hair Growth Kit"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>

                        <div className="p-8 border-t border-white/5">
                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Minoxidil 5% Hair Growth Kit</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed h-10">Complete regimen including Massager. Maximizes absorption for better efficiency.</p>

                            <div className="flex items-center justify-between mt-auto">
                                <Button className="bg-[#D4AF37] text-black hover:bg-white hover:text-black border-none rounded-none px-8 tracking-widest text-xs font-bold uppercase transition-all duration-300 w-full md:w-auto" asChild>
                                    <a href="https://www.amazon.com/dp/B0D2Z9D2D8" target="_blank" rel="noopener noreferrer">
                                        VIEW PRODUCT
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
