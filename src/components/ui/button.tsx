import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Simple utility for cn
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "default" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            outline: "border border-input bg-transparent shadow-sm hover:bg-secondary hover:text-secondary-foreground",
            ghost: "hover:bg-secondary hover:text-secondary-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        }

        const sizes = {
            default: "h-11 px-8 py-2 text-sm",
            sm: "h-9 rounded-md px-3 text-xs",
            lg: "h-12 rounded-md px-8 text-base",
            icon: "h-9 w-9",
        }

        const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

        if (asChild) {
            const { children, ...restProps } = props as { children?: React.ReactNode };
            if (React.isValidElement(children)) {
                const child = children as React.ReactElement<any>;
                return React.cloneElement(child, {
                    className: cn(buttonClasses, child.props.className),
                    ...restProps,
                    ...child.props, // Preserve child props, allowing override if needed
                    ref: ref ? (node: any) => {
                        // Merge refs if needed, primitive handling
                        if (typeof ref === 'function') ref(node);
                        else if (ref) (ref as any).current = node;
                        // Also call child's ref if it exists? ignoring for now for simplicity
                    } : undefined
                } as any);
            }
        }

        return (
            <button
                className={buttonClasses}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
