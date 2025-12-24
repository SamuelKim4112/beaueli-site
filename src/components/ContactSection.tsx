"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111] -z-10 rounded-l-[5rem] hidden lg:block border-l border-white/5"></div>

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-10">
                        <div className="inline-block rounded-full bg-[#1A1A1A] border border-[#D4AF37]/30 px-6 py-2.5 text-base font-bold text-[#D4AF37] mb-4 tracking-wide shadow-md">
                            GET IN TOUCH
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-white leading-[1.05]">
                            We're here to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F59E0B]">help you grow.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-lg">
                            Questions about your regimen? Our hair growth experts are ready to assist you on your journey.
                        </p>

                        <div className="flex flex-col gap-8 pt-8">
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#111] border border-white/10 hover:shadow-glow-gold transition-all hover:border-[#D4AF37]/30 group w-fit pr-12">
                                <div className="h-14 w-14 rounded-full bg-[#000] shadow-sm flex items-center justify-center text-2xl border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors">✉️</div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Support</p>
                                    <a href="mailto:support@beaueli.com" className="text-xl font-serif text-white hover:text-[#D4AF37] transition-colors">support@beaueli.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Card */}
                    <div className="bg-[#111] rounded-[2.5rem] p-8 md:p-14 shadow-luxury hover:shadow-[0_0_60px_rgba(0,0,0,0.6)] transition-shadow duration-500 border border-white/10 relative">
                        <form
                            className="space-y-8"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                                window.location.href = `mailto:support@beaueli.com?subject=New Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-widest">Name</label>
                                    <Input id="name" name="name" placeholder="Your Name" className="bg-[#1A1A1A] border-white/10 h-16 rounded-xl focus:bg-black focus:border-[#D4AF37] focus:ring-[#D4AF37] transition-colors text-white text-lg placeholder:text-gray-600 font-light" required />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-widest">Email</label>
                                    <Input id="email" name="email" type="email" placeholder="email@example.com" className="bg-[#1A1A1A] border-white/10 h-16 rounded-xl focus:bg-black focus:border-[#D4AF37] focus:ring-[#D4AF37] transition-colors text-white text-lg placeholder:text-gray-600 font-light" required />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="message" className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-widest">Message</label>
                                <Textarea id="message" name="message" placeholder="How can we help?" className="min-h-[180px] bg-[#1A1A1A] border-white/10 resize-none p-6 rounded-xl focus:bg-black focus:border-[#D4AF37] focus:ring-[#D4AF37] transition-colors text-lg text-white font-light placeholder:text-gray-600 leading-relaxed" required />
                            </div>
                            <Button type="submit" size="lg" className="w-full h-20 text-lg font-bold bg-[#D4AF37] hover:bg-white text-black rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 uppercase tracking-widest">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
