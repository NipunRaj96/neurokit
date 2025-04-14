
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="relative z-0 w-full py-24 bg-white overflow-hidden px-4 md:px-10">
      {/* 3D Element - Top Left */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c3130c3b9e0d6d7724b8cd4d8757f30b2bd968?placeholderIfAbsent=true"
        alt="3D Element"
        className="absolute top-10 left-10 w-20 h-20 opacity-40 rotate-12 animate-pulse hidden md:block"
      />
      
      {/* 3D Element - Bottom Right */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcad89d5243b55f92f81f85dba2892147d6b92f6?placeholderIfAbsent=true"
        alt="3D Element"
        className="absolute bottom-10 right-10 w-24 h-24 opacity-30 -rotate-12 animate-pulse hidden md:block"
      />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 max-w-3xl">
          Transform your LLMs today
        </h2>
        
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Join thousands of developers who are enhancing their AI applications 
            with our specialized Model Control Panels.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button size="lg" className="px-8">
            Explore the Marketplace
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
