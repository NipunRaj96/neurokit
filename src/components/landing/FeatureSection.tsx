
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
      className="z-0 flex w-full flex-col overflow-hidden items-center px-10 py-24 max-md:max-w-full max-md:pb-[100px] max-md:px-5 space-y-12"
    >
      <div className="flex w-[508px] max-w-full flex-col items-center text-black font-semibold text-center tracking-[-1px]">
        <Badge className="w-[168px] text-center">Powerful Features</Badge>
        <h2 className="text-[52px] leading-none self-stretch mt-7 max-md:max-w-full max-md:text-[40px]">
          Transform your LLM
        </h2>
        <h2 className="text-[51px] leading-none mt-[11px] max-md:text-[40px]">
          capabilities instantly
        </h2>
      </div>
      
      <p className="text-black text-xl font-normal leading-[31px] text-center max-w-xl mx-auto">
        Enhance your AI applications with specialized control panels designed to optimize performance for specific use cases
      </p>
      
      <div className="self-stretch relative z-10 mt-12 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5fe3c22bcb23541b7f3c3a005f5e664155d6c57?placeholderIfAbsent=true"
          alt="Dashboard screenshot"
          className="aspect-[1.51] object-contain w-full max-w-[1085px] shadow-[0px_20px_40px_rgba(10,23,61,0.2)] self-center z-0 rounded-[10px]"
        />
      </div>
      
      <div className="self-stretch mt-16 max-md:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
    </section>
  );
};

export default FeatureSection;
