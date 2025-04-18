
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="z-0 w-full py-0 px-10 md:px-8 relative">
      <div className="flex max-w-7xl mx-auto items-center space-x-14">
         <div className="flex flex-col max-w-3xl">
          <Badge className="w-44 text-center mb-4 transition-all duration-300 hover:bg-blue-100">Now with AI recommendations</Badge>
          <h1 className="text-5xl md:text-[85px] font-semibold tracking-[-2.5px] leading-[1.05] max-md:text-[40px] max-md:leading-[47px] mt-[-4]">
            Amplify your <br />
            LLM capabilities <br />
            <span className="block">with NeuroKit</span>
          </h1>
          <p className="text-black text-xl font-normal leading-[31px] mt-8 mb-10">
            Discover and deploy Model Context Protocols (MCPs) <br className="hidden md:block" /> 
            that enhance your AI applications with specialized controls, <br className="hidden md:block" />
            optimized for your specific use cases.
          </p>
          <div className="flex items-center gap-5 text-[15px] justify-start mb-4">
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
        <div className="hidden md:block relative">
          <img 
            src="/lovable-uploads/a25dc278-2692-4177-9cbd-77d1c54019dc.png" 
            alt="NeuroKit Illustration" 
            className="w-[500px] h-auto object-contain transform hover:scale-105 transition-all duration-500 animate-pulse-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
