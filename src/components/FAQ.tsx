"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-white/5 last:border-none">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between py-8 text-left group"
            >
                <span className={`text-xl font-serif transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#D4AF37]/80'}`}>
                    {question}
                </span>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? 'bg-[#D4AF37] border-[#D4AF37] text-black rotate-180' : 'group-hover:border-[#D4AF37] text-white'}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 font-light leading-relaxed pb-8 pr-12 text-base md:text-lg">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "How soon will I see results?",
            answer: "Growth cycles take time. While individual results vary, most men observe initial changes in texture and thickness within 3-4 months, with fuller coverage appearing around the 6-month mark of consistent use."
        },
        {
            question: "Is Minoxidil 5% safe for daily use?",
            answer: "Yes. Formulated with Minoxidil, an FDA-approved active ingredient. It is designed for daily deep-scalp application. As with any topical product, discontinue use if irritation occurs."
        },
        {
            question: "What happens if I miss a dose?",
            answer: "Consistency is key to maintaining the growth phase. If you miss a day, simply resume your routine the next day. Do not double up on doses."
        },
        {
            question: "Can I use styling products with this?",
            answer: "Absolutely. We recommend applying the serum to a clean, dry scalp and letting it dry completely (approx. 15-20 mins) before applying pomades, gels, or sprays."
        }
    ]

    return (
        <section id="faq" className="py-20 md:py-32 bg-[#050505] relative w-full">
            <div className="container max-w-3xl px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-16 md:mb-20 space-y-6">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Support</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight">
                        Common Questions
                    </h2>
                </div>

                <div className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 mb-6">Still have questions?</p>
                    <a href="mailto:support@beaueli.com" className="text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors font-serif italic text-lg">
                        Contact our experts
                    </a>
                </div>
            </div>
        </section>
    )
}
