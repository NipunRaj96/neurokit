
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="z-0 flex min-h-[932px] w-full items-start justify-center pt-[260px] pb-[140px] px-10 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="self-stretch flex min-w-60 w-full max-w-[1200px] flex-col flex-1 shrink basis-[0%] my-auto pr-20 pb-[117px] max-md:max-w-full max-md:pb-[100px]">
        <Badge className="w-44 text-center mb-6">Now with AI recommendations</Badge>
        <h1 className="text-[85px] font-semibold tracking-[-2.5px] leading-[90px] pl-3.5 pr-[105px] py-3.5 max-md:max-w-full max-md:text-[40px] max-md:leading-[47px] max-md:pr-5">
          Amplify your <br />
          LLM capabilities
        </h1>
        <p className="text-black text-xl font-normal leading-[31px] mt-8 max-md:max-w-full">
          Discover and deploy Model Control Panels (MCPs) <br />
          that enhance your AI applications with specialized <br />
          controls, optimized for your specific use cases.
        </p>
        <div className="flex items-center gap-5 overflow-hidden text-[15px] justify-start mt-[40px]">
          <Button size="lg">Explore MCPs</Button>
          <Button variant="outline" size="lg" className="inline-flex items-center gap-2">
            Learn more
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
