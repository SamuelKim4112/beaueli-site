import { Star } from "lucide-react"

export function SocialProof() {
    const reviews = [
        {
            name: "Sarah J.",
            rating: 5,
            text: "I was skeptical at first, but after 6 weeks my lashes look insane. I've stopped getting extensions completely.",
            verified: true
        },
        {
            name: "Michelle K.",
            rating: 5,
            text: "The brow serum filled in my sparse tails that haven't grown in years. Highly recommend!",
            verified: true
        },
        {
            name: "Jessica T.",
            rating: 5,
            text: "Zero irritation, which is huge for me. My eyes are super sensitive but this serum is gentle.",
            verified: true
        }
    ]

    return (
        <section id="reviews" className="py-24 bg-slate-50 border-y border-slate-100">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
                    Loved by thousands
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <blockquote className="text-lg font-medium leading-relaxed mb-6">
                                &ldquo;{review.text}&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-200" />
                                <div>
                                    <div className="font-semibold text-sm">{review.name}</div>
                                    {review.verified && (
                                        <div className="text-xs text-muted-foreground flex items-center">
                                            Verified Buyer
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
