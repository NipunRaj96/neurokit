
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="relative z-0 w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-10 md:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 max-w-3xl">
          Transform your LLMs today
        </h2>
        
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Join thousands of developers who are enhancing their AI applications 
            with our specialized Model Context Protocols.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button size="lg" className="px-8 w-full md:w-auto">
            Explore the Marketplace
          </Button>
          <Button variant="outline" size="lg" className="px-8 w-full md:w-auto">
            Request Demo
          </Button>
        </div>
        
        {/* 3D Star Element - Enlarged */}
        <div className="absolute right-[10%] top-1/4 hidden md:block">
          <img 
            src="/lovable-uploads/5e23b0fd-e51c-479d-acbd-9838f7fbfb06.png"
            alt="3D Star Element"
            className="w-[150px] h-auto animate-pulse-slow transform hover:rotate-45 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
