"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Renamed and updated state
    const [scrolled, setScrolled] = useState(false); // New state for scroll effect

    // Effect to handle scroll for header styling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-md' : 'bg-black/80 backdrop-blur-sm py-5'}`}>
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between h-14">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 group">
                        <div className="relative w-32 h-10 md:w-40 md:h-12">
                            <Image
                                src="/logo_clean.png"
                                alt="Beaueli Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#products" className="text-xs font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest transition-colors">
                            Products
                        </Link>
                        <Link href="#reviews" className="text-xs font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest transition-colors">
                            Results
                        </Link>
                        <Link href="#science" className="text-xs font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest transition-colors">
                            Science
                        </Link>
                        <Link href="#" className="text-xs font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest transition-colors">
                            About Us
                        </Link>
                        <Link href="#faq" className="text-xs font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest transition-colors">
                            FAQ
                        </Link>

                        <Button className="bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] hover:from-[#B4941F] hover:to-[#D97706] text-black font-bold rounded-full px-6 uppercase tracking-wider transition-all shadow-lg hover:shadow-[#D4AF37]/50 h-10 border-none" asChild>
                            <a href="#products">Get started</a>
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 text-white hover:text-[#D4AF37] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <div className="space-y-1.5">
                            <span className="block w-6 h-0.5 bg-current"></span>
                            <span className="block w-6 h-0.5 bg-current"></span>
                            <span className="block w-6 h-0.5 bg-current"></span>
                        </div>}
                    </button>

                </div>
            </header>

            {/* Mobile Menu Overlay - Moved outside header to escape backdrop-filter containing block */}
            {
                isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-[#050505] z-[110] flex flex-col justify-center items-center gap-8 animate-in slide-in-from-top-0 duration-300">
                        <button
                            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={28} />
                        </button>
                        <Link href="#products" className="text-2xl font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                        <Link href="#reviews" className="text-2xl font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Results</Link>
                        <Link href="#science" className="text-2xl font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Science</Link>
                        <Link href="#" className="text-2xl font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        <Link href="#faq" className="text-2xl font-bold text-white hover:text-[#D4AF37] uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                        <Button className="bg-[#D4AF37] text-black font-bold rounded-full px-12 py-6 text-xl uppercase tracking-widest mt-8" asChild onClick={() => setIsMobileMenuOpen(false)}>
                            <a href="#products">Get Started</a>
                        </Button>
                    </div>
                )
            }
        </>
    )
}
