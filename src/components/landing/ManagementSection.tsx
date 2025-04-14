
import React from "react";
import { Badge } from "@/components/ui/badge";

const ManagementSection: React.FC = () => {
  return (
    <section className="bg-white z-0 flex w-full flex-col overflow-hidden items-center text-black font-normal text-center px-10 py-24 max-md:max-w-full max-md:px-5 space-y-8">
      <Badge className="w-[151px] text-center">Streamlined Workflow</Badge>
      
      <div className="text-center">
        <h2 className="text-[53px] font-semibold leading-none tracking-[-1px] max-md:text-[40px]">
          Simplified MCP Management
        </h2>
      </div>
      
      <p className="text-xl leading-[31px] max-w-xl mx-auto">
        Browse, deploy, and manage your Model Control Panels with intuitive tools designed for both beginners and experts. Monitor performance and iterate with confidence.
      </p>
      
      <div className="w-full flex flex-col md:flex-row gap-8 mt-12">
        <div className="flex-1 bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.1)] rounded-[20px] border border-[rgba(34,34,34,0.1)] p-8 space-y-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c3130c3b9e0d6d7724b8cd4d8757f30b2bd968?placeholderIfAbsent=true"
            alt="MCP Dashboard"
            className="w-full rounded-lg"
          />
          <div className="text-center space-y-4">
            <h3 className="text-[25px] font-semibold tracking-[-0.6px]">
              Visual MCP Dashboard
            </h3>
            <p className="text-base">
              Track performance metrics and usage analytics for all your deployed MCPs in one central hub. Make data-driven decisions with ease.
            </p>
          </div>
        </div>
        
        <div className="flex-1 bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.1)] rounded-[20px] border border-[rgba(34,34,34,0.1)] p-8 space-y-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcad89d5243b55f92f81f85dba2892147d6b92f6?placeholderIfAbsent=true"
            alt="Collaboration Tools"
            className="w-full rounded-lg"
          />
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold tracking-[-0.6px]">
              Team Collaboration
            </h3>
            <p className="text-base">
              Share MCPs with team members, assign roles, and collaborate on optimizations in real-time. Perfect for AI-powered teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
