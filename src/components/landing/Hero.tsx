
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="z-0 flex min-h-[932px] w-full items-center font-medium justify-center pt-[260px] pb-[120px] px-10 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="self-stretch flex min-w-60 w-full max-w-[1200px] flex-col flex-1 shrink basis-[0%] my-auto pr-20 pb-[117px] max-md:max-w-full max-md:pb-[100px]">
        <Badge className="w-44 text-center">Now with AI recommendations</Badge>
        <h1 className="text-[85px] font-semibold tracking-[-2.5px] leading-[90px] mt-4 pl-3.5 pr-[105px] py-3.5 max-md:max-w-full max-md:text-[40px] max-md:leading-[47px] max-md:pr-5">
          Amplify your <br />
          LLM capabilities
        </h1>
        <p className="text-black text-xl font-normal leading-[31px] mt-6 max-md:max-w-full">
          Discover and deploy Model Control Panels (MCPs) <br />
          that enhance your AI applications with specialized <br />
          controls, optimized for your specific use cases.
        </p>
        <div className="flex items-center gap-2.5 overflow-hidden text-[15px] text-center justify-center mt-[34px]">
          <Button>Explore MCPs</Button>
          <a
            href="#learn-more"
            className="self-stretch flex items-stretch gap-[5px] text-black leading-loose w-[106px] my-auto px-[3px] py-1"
          >
            <span className="grow">Learn more</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8107bed0436c696330c9405bd98769bb010fb91b?placeholderIfAbsent=true"
              alt="Arrow right"
              className="aspect-[1] object-contain w-4 shrink-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
