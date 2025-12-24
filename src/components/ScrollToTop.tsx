"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Button
            className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-slate-900 hover:bg-slate-800 text-white shadow-xl transition-all duration-300 hover:-translate-y-1"
            size="icon"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-6 w-6" />
        </Button>
    );
}
