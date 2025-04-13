import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  popular?: boolean;
  buttonText: string;
  buttonVariant: "default" | "white";
  features: string[];
  dark?: boolean;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  popular = false,
  buttonText,
  buttonVariant,
  features,
  dark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "grow overflow-hidden text-center w-full rounded-[20px]",
        dark
          ? "bg-black shadow-[0px_10px_20px_rgba(0,0,0,0.1)] text-white"
          : "bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.1)] text-black font-medium",
        className,
      )}
    >
      <div className="border flex w-full flex-col px-10 py-[43px] rounded-[20px] border-[rgba(34,34,34,0.1)] border-solid max-md:px-5">
        {popular ? (
          <div className="self-stretch flex w-full items-center gap-[40px_100px] overflow-hidden justify-between">
            <div className="text-lg font-semibold leading-none tracking-[-0.1px] self-stretch my-auto">
              {name}
            </div>
            <Badge variant="dark" className="w-[108px] text-center">
              Most popular
            </Badge>
          </div>
        ) : (
          <div className="text-lg font-semibold leading-none tracking-[-0.1px]">
            {name}
          </div>
        )}
        <div className="self-stretch flex gap-1 overflow-hidden font-semibold whitespace-nowrap mt-[35px]">
          <div className="text-[47px] leading-none tracking-[-1px] max-md:text-[40px]">
            {price}
          </div>
          <div className="text-[17px] leading-none tracking-[-0.1px]">
            /month
          </div>
        </div>
        <Button variant={buttonVariant} className="self-stretch mt-[30px]">
          {buttonText}
        </Button>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-stretch gap-[7px] text-[13px] tracking-[-0.2px] leading-none mt-[31px] first:mt-[31px] mt-[22px]"
          >
            <img
              src={dark ? `https://cdn.builder.io/api/v1/image/assets/TEMP/9f5a7cd21ff8ea07d50364c77d25650184a93697?placeholderIfAbsent=true${index}` : `https://cdn.builder.io/api/v1/image/assets/TEMP/c7c6cd87b8fb4815a5b1b3f73736a4d5e50eb7e6?placeholderIfAbsent=true${index}`}
              alt="Check"
              className="aspect-[1] object-contain w-4 shrink-0"
            />
            <div className="basis-auto">{feature}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
