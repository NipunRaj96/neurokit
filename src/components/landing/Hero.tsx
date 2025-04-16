
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="z-0 w-full py-16 px-10 md:px-8 relative">
      <div className="flex max-w-7xl mx-auto">
        <div className="flex flex-col max-w-3xl">
          <Badge className="w-44 text-center mb-6 transition-all duration-300 hover:bg-blue-100">Now with AI recommendations</Badge>
          <h1 className="text-5xl md:text-[85px] font-semibold tracking-[-2.5px] leading-[1.05] max-md:text-[40px] max-md:leading-[47px]">
            Amplify your <br />
            LLM capabilities with NeuroKit
          </h1>
          <p className="text-black text-xl font-normal leading-[31px] mt-8 mb-10">
            Discover and deploy Model Control Panels (MCPs) <br className="hidden md:block" />
            that enhance your AI applications with specialized <br className="hidden md:block" />
            controls, optimized for your specific use cases.
          </p>
          <div className="flex items-center gap-5 text-[15px] justify-start">
            <Button 
              size="lg" 
              className="w-full md:w-auto transition-all duration-300 hover:scale-105"
            >
              Explore MCPs
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="inline-flex items-center gap-2 w-full md:w-auto transition-all duration-300 hover:translate-x-1 group"
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

