
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="relative z-0 w-full py-24 bg-white overflow-hidden px-4 md:px-10">
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
