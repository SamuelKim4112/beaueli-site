"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
    return (
        <section id="contact" className="py-24 bg-[#0B0F19] text-white">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-block rounded-full bg-blue-900/30 border border-blue-800 px-4 py-1.5 text-sm font-bold text-blue-400 mb-2">
                            GET IN TOUCH
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                            Ready to start your <br />
                            <span className="text-blue-500">hair growth journey?</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                            We are here to help. Whether you have questions about the science, usage, or shipping, our team is ready.
                        </p>
                        <div className="pt-8 border-t border-slate-800">
                            <p className="text-sm text-slate-500 mb-2">Direct Email</p>
                            <a href="mailto:support@beaueli.com" className="text-2xl font-bold hover:text-blue-400 transition-colors">
                                support@beaueli.com
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl text-slate-900">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Name</label>
                                <Input id="name" placeholder="Your Name" className="bg-slate-50 border-slate-200 h-12 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email</label>
                                <Input id="email" type="email" placeholder="your@email.com" className="bg-slate-50 border-slate-200 h-12 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message</label>
                                <Textarea id="message" placeholder="How can we help?" className="min-h-[120px] bg-slate-50 border-slate-200 resize-none p-4 rounded-xl" />
                            </div>
                            <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-[#D02B2B] hover:bg-[#b02222] text-white rounded-xl shadow-lg transition-all">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
