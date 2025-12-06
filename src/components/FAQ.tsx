"use client" // Needed for interactivity if we use state, but native details/summary works too without client directive usually. 
// However, for smooth animation we usually want useState. For simplicity/robustness without heavy libs, I'll use standard details/summary or a simple state.
// Let's use simple state to control open/close for better styling.

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/components/ui/button"

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-primary"
            >
                {question}
                <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} />
            </button>
            <div
                className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0")}
            >
                <p className="text-muted-foreground">{answer}</p>
            </div>
        </div>
    )
}

export function FAQ() {
    const faqs = [
        {
            question: "How long until I see results?",
            answer: "Most users begin to see visible improvement in density and shine within 4-6 weeks, with full results after 3 months of consistent daily use."
        },
        {
            question: "Is it safe for sensitive eyes?",
            answer: "Yes, Beaueli is ophthalmologist-tested an formulated to be gentle. However, we always recommend patch testing if you have highly sensitive skin."
        },
        {
            question: "Can I use this with lash extensions?",
            answer: "Absolutely. Our formula is oil-free, meaning it won't dissolve the adhesive bonds of your lash extensions."
        },
        {
            question: "What happens if I stop using it?",
            answer: "Your lashes will gradually return to their natural growth cycle and appearance over the course of a few weeks."
        }
    ]

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container max-w-2xl px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
                    Frequently asked questions
                </h2>
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    )
}
