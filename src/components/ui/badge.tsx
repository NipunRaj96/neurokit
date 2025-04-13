import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "relative inline-flex items-center justify-center rounded-[10px] text-[13px] font-medium leading-none tracking-[-0.2px] px-[13px] py-2",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(255,255,255,0.3)] text-black border border-[rgba(34,34,34,0.1)]",
        dark: "bg-[rgba(13,13,13,1)] text-white border border-[rgba(255,255,255,0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
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
