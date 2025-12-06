import { Timer, Droplets, Sparkles } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            title: "Apply Daily",
            description: "Swipe a single stroke along the lash line or brow area once a day.",
            icon: Droplets,
        },
        {
            title: "Wait 90 Days",
            description: "Consistency is key. Our formula works with your natural hair cycle.",
            icon: Timer,
        },
        {
            title: "See Results",
            description: "Enjoy visibly longer-looking, thicker-feeling lashes and brows.",
            icon: Sparkles,
        },
    ]

    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Simple Routine. Real Results.</h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3 relative">
                    {/* Connector Line for Desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10" />

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center bg-white">
                            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-secondary mb-6 border-4 border-white shadow-sm">
                                <step.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                {i + 1}. {step.title}
                            </h3>
                            <p className="text-muted-foreground max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
