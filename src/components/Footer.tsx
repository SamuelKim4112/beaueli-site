"use client";

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="bg-[#050505] pt-24 pb-12 relative overflow-hidden">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

            <div className="container px-6 mx-auto max-w-7xl relative z-10">

                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-24 border-b border-white/5 pb-24">
                    <div className="max-w-xl">
                        <Link href="/" className="inline-block mb-10 relative w-48 h-12">
                            <Image
                                src="/logo_clean.png"
                                alt="Beaueli"
                                fill
                                className="object-contain object-left brightness-0 invert opacity-90"
                            />
                        </Link>
                        <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                            Science-backed hair restoration for the modern era.
                            <span className="block text-gray-500 mt-3 font-normal">Designed with evidence-based ingredients. Aesthetically refined.</span>
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        <p className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-6">Join the List</p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
                                window.location.href = `mailto:support@beaueli.com?subject=Join the Newsletter&body=Please add me to the mailing list: ${email}`;
                            }}
                            className="flex border-b border-white/20 pb-4 focus-within:border-[#D4AF37] transition-colors"
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="bg-transparent border-none outline-none text-white text-lg w-full placeholder:text-gray-600 font-light"
                                required
                            />
                            <button type="submit" className="text-white hover:text-[#D4AF37] transition-colors p-2">
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-12 mb-24">
                    {/* Shop Column */}
                    <div>
                        <h4 className="font-serif text-white text-lg mb-6">Shop</h4>
                        <ul className="space-y-4">
                            <li><a href="https://www.amazon.com/dp/B0CR6FM6L8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">Growth Serum</a></li>
                            <li><a href="https://www.amazon.com/dp/B0D2Z9D2D8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">The Kit</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-serif text-white text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">Our Story</a></li>
                            <li><a href="#science" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">The Science</a></li>
                            <li><a href="#results" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">Customer Results</a></li>
                        </ul>
                    </div>

                    {/* Be The First Column (Newsletter) */}
                    <div>
                        <h4 className="font-serif text-white text-lg mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="mailto:support@beaueli.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm tracking-wide">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-serif text-xl text-white mb-8">Social</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-10 border-t border-white/5 font-light tracking-wide">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p>© {new Date().getFullYear()} BEAUELI CORP. ALL RIGHTS RESERVED.</p>
                        <span className="text-[10px] text-gray-800 border border-gray-800 px-1 rounded hover:text-gray-500 transition-colors cursor-help" title="Build Version">v4.1.0 (Live)</span>
                    </div>
                    <div className="flex gap-10 mt-6 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors uppercase text-xs tracking-widest">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors uppercase text-xs tracking-widest">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
