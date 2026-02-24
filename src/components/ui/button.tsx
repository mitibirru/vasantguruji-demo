import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg",
        bright:
          "bg-primary-bright text-white hover:bg-primary shadow-md hover:shadow-lg",
        devotion:
          "bg-devotion text-white hover:bg-devotion-hover shadow-md hover:shadow-lg",
        sage:
          "bg-sage text-white hover:bg-sage-hover shadow-md hover:shadow-lg",
        amber:
          "bg-amber text-white hover:bg-amber/90 shadow-md hover:shadow-lg",
        saffron:
          "bg-saffron text-white hover:bg-saffron/90 shadow-md hover:shadow-lg",
        outline:
          "border-2 border-border bg-card hover:bg-surface text-foreground hover:border-primary/40",
        ghost:
          "hover:bg-surface text-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
        soft:
          "bg-primary-light text-primary hover:bg-primary-light/70 font-semibold",
        "soft-devotion":
          "bg-devotion-light text-devotion hover:bg-devotion-light/70 font-semibold",
        "soft-sage":
          "bg-sage-light text-sage hover:bg-sage-light/70 font-semibold",
        "soft-amber":
          "bg-amber-light text-amber hover:bg-amber-light/70 font-semibold",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
