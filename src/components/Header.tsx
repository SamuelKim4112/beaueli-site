import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ShoppingBag, Menu } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Mobile Menu */}
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tight uppercase">
                        Beaueli
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#products" className="hover:text-foreground transition-colors">
                        Shop
                    </Link>
                    <Link href="#how-it-works" className="hover:text-foreground transition-colors">
                        How it Works
                    </Link>
                    <Link href="#reviews" className="hover:text-foreground transition-colors">
                        Reviews
                    </Link>
                    <Link href="#faq" className="hover:text-foreground transition-colors">
                        FAQ
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Cart</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
