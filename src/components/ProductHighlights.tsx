import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ProductHighlights() {
    return (
        <section id="products" className="py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 mb-4">
                        Our Collection
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Targeted Treatments
                    </h2>
                </div>

                <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
                    {/* Lash Serum */}
                    <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md">
                        <div className="aspect-[4/3] bg-gray-100 relatiive">
                            {/* Placeholder for product image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                Lash Serum Image
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">Lash Renewal Serum</h3>
                            <p className="text-muted-foreground mb-6">
                                A powerful peptide complex designed to nourish lashes and support natural growth.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Thicker looking lashes in 4 weeks", "Safe for sensitive eyes", "Oil-free (extension safe)"].map((item) => (
                                    <li key={item} className="flex items-center text-sm">
                                        <Check className="mr-2 h-4 w-4 text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full" size="lg">Shop Lash Serum — $49</Button>
                        </div>
                    </div>

                    {/* Brow Serum */}
                    <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md">
                        <div className="aspect-[4/3] bg-gray-100 relatiive">
                            {/* Placeholder for product image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                Brow Serum Image
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">Brow Definition Serum</h3>
                            <p className="text-muted-foreground mb-6">
                                Targeted applicator to fill in sparse areas and condition brittle brow hairs.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Fuller, denser appearance", "Sculpts and conditions", "Non-sticky formula"].map((item) => (
                                    <li key={item} className="flex items-center text-sm">
                                        <Check className="mr-2 h-4 w-4 text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full" variant="outline" size="lg">Shop Brow Serum — $49</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
