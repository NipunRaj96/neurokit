
import React from "react";
import { Badge } from "@/components/ui/badge";
import FeatureCard from "./FeatureCard";

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17af7f5606c78bfc5dc242c6b46e1aa5c74a1e40?placeholderIfAbsent=true",
      title: "AI-Powered Recommendations",
      description: "Get personalized MCP suggestions based on your specific use cases and needs.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/af09d096247416c44f52a6472fbc87537480f00b?placeholderIfAbsent=true",
      title: "One-Click Deployment",
      description: "Seamlessly integrate MCPs with your existing LLM infrastructure in seconds.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3828436c852f4c440bcb2c6c8cb13c082e1d1f35?placeholderIfAbsent=true",
      title: "Version Control & History",
      description: "Track changes and roll back to previous versions of your MCPs anytime.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b841f8b5ed3bed3593ef42e1675bb83155b2ae1?placeholderIfAbsent=true",
      title: "Custom MCP Creation",
      description: "Build and publish your own MCPs to share with the community or keep private.",
    },
  ];

  return (
    <section 
      id="features" 
      className="z-0 w-full bg-white py-24 px-10 md:px-8 max-md:py-[100px] relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <Badge className="w-[168px] text-center mb-6">Powerful Features</Badge>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Transform your LLM<br />capabilities instantly
          </h2>
          
          <p className="text-black text-xl font-normal leading-[31px] mt-6 max-w-xl mx-auto">
            Enhance your AI applications with specialized control panels designed to optimize performance for specific use cases
          </p>
        </div>
        
        <div className="relative z-10 w-full mt-12">
          <img
            src="/lovable-uploads/581a88e1-3cac-4e6f-ba15-0aef81c9f0db.png" 
            alt="NeuroKit Dashboard"
            className="aspect-[1.51] object-contain w-full max-w-[1085px] mx-auto shadow-[0px_20px_40px_rgba(10,23,61,0.2)] rounded-[10px]"
          />
        </div>
        
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

