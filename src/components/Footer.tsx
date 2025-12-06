import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight uppercase mb-6 inline-block">
                            Beaueli
                        </Link>
                        <p className="text-gray-400 max-w-xs">
                            Clinically inspired beauty solutions for real, visible results.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Lash Serum</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Brow Serum</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sets & Bundles</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Beaueli Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
