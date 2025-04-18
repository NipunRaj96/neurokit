
import React from "react";
import { Badge } from "@/components/ui/badge";

const ManagementSection: React.FC = () => {
  return (
    <section className="bg-white z-0 w-full py-24 px-10 md:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <Badge className="w-[151px] text-center mb-6">Streamlined Workflow</Badge>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Simplified MCP Management
          </h2>
          
          <p className="text-xl leading-[31px] mt-6 max-w-2xl mx-auto">
            Browse, deploy, and manage your Model Control Panels with intuitive tools designed for both beginners and experts. Monitor performance and iterate with confidence.
          </p>
        </div>
        
        <div className="w-full flex flex-col md:flex-row gap-8">
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
      </div>
    </section>
  );
};

export default ManagementSection;
