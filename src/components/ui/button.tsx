import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-[10px] text-[15px] font-medium tracking-[-0.3px] leading-[1.3] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.07)] border border-[rgba(255,255,255,0.2)]",
        white:
          "bg-white text-black shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.07)] border border-[rgba(34,34,34,0.1)]",
        link: "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "px-[15px] py-2.5",
        sm: "px-3 py-2",
        lg: "px-5 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
