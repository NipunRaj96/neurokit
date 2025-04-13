
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
    <section id="features" className="z-0 flex w-full flex-col overflow-hidden items-center px-10 py-[102px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex w-[508px] max-w-full flex-col items-center text-black font-semibold text-center tracking-[-1px]">
        <Badge className="w-[168px] text-center">Powerful Features</Badge>
        <h2 className="text-[52px] leading-none self-stretch mt-7 max-md:max-w-full max-md:text-[40px]">
          Transform your LLM
        </h2>
        <h2 className="text-[51px] leading-none mt-[11px] max-md:text-[40px]">
          capabilities instantly
        </h2>
      </div>
      <p className="text-black text-xl font-normal leading-[31px] text-center mt-7 max-md:max-w-full">
        Enhance your AI applications with specialized control panels <br />
        designed to optimize performance for specific use cases
      </p>
      <div className="self-stretch relative z-10 flex mt-[-103px] flex-col pt-[164px] max-md:max-w-full max-md:pt-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5fe3c22bcb23541b7f3c3a005f5e664155d6c57?placeholderIfAbsent=true"
          alt="Dashboard screenshot"
          className="aspect-[1.51] object-contain w-[1085px] shadow-[0px_20px_40px_rgba(10,23,61,0.2)] self-center z-0 max-w-full rounded-[10px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec7f516bc0959dc67006bc4ed85377fa92837c9?placeholderIfAbsent=true"
          alt="Decoration"
          className="aspect-[0.62] object-contain w-[252px] absolute z-0 max-w-full top-[-152px] left-[1083px] -right-10 bottom-[809px]"
        />
      </div>
      <div className="self-stretch mb-[-25px] mt-[82px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
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
