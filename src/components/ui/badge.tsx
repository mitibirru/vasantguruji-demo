import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-white",
        bright: "border-transparent bg-primary-bright text-white",
        secondary: "border-transparent bg-surface text-foreground",
        devotion: "border-transparent bg-devotion text-white",
        sage: "border-transparent bg-sage text-white",
        amber: "border-transparent bg-amber text-white",
        saffron: "border-transparent bg-saffron text-white",
        outline: "border-border text-foreground",
        "soft-primary": "border-transparent bg-primary-light text-primary font-bold",
        "soft-devotion": "border-transparent bg-devotion-light text-devotion font-bold",
        "soft-sage": "border-transparent bg-sage-light text-sage font-bold",
        "soft-amber": "border-transparent bg-amber-light text-amber font-bold",
        "soft-saffron": "border-transparent bg-saffron-light text-saffron font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
