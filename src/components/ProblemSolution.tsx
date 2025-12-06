import { AlertCircle, CheckCircle2, XCircle } from "lucide-react"

export function ProblemSolution() {
    const problems = [
        {
            title: "Short & Brittle",
            description: "Lashes that break easily and never seem to grow past a certain length.",
            icon: XCircle,
        },
        {
            title: "Thinning Brows",
            description: "Sparse patches caused by over-plucking or aging.",
            icon: AlertCircle,
        },
        {
            title: "Damage from Extensions",
            description: "Weakened follicles from harsh glues and frequent salon treatments.",
            icon: XCircle,
        },
    ]

    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Why do lashes & brows struggle?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Stress, aging, and harsh treatments can disrupt your hair's growth cycle.
                        Beaueli targets the root cause with clinical precision.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {problems.map((problem) => (
                        <div key={problem.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/50 border border-gray-100">
                            <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                                <problem.icon className="h-6 w-6 text-red-400" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">{problem.title}</h3>
                            <p className="text-muted-foreground">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
