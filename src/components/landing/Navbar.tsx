import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute z-10 flex min-h-[71px] w-full flex-col items-stretch text-[15px] text-black font-medium justify-center h-[71px] right-0 top-0">
      <div className="flex w-full items-center justify-center flex-1 h-full">
        <div className="self-stretch flex min-w-60 w-full max-w-[1600px] items-stretch gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] my-auto pt-5 pb-[15px] px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28a12ec18c7d504adacd29dff7db73b6cdcecd9c?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[1] object-contain w-10 shrink-0"
          />
          <div className="flex min-w-60 items-center gap-5 overflow-hidden justify-center flex-wrap">
            <a href="#about" className="leading-[1.6] self-stretch my-auto">
              About
            </a>
            <a href="#features" className="leading-loose self-stretch my-auto">
              Features
            </a>
            <a href="#customers" className="leading-loose self-stretch my-auto">
              Customers
            </a>
            <a href="#updates" className="leading-loose self-stretch my-auto">
              Updates
            </a>
            <a href="#help" className="leading-loose self-stretch my-auto">
              Help
            </a>
            <Button>Get for free</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
