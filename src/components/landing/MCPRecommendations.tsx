
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const MCPRecommendations: React.FC = () => {
  return (
    <section id="ai-recommendations" className="bg-[#f9fafb] z-0 flex w-full flex-col overflow-hidden items-center text-black font-normal text-center px-10 py-24 max-md:max-w-full max-md:px-5 relative">
      <Badge className="w-[200px] text-center">AI-Powered Discovery</Badge>
      <h2 className="text-[53px] font-semibold leading-none tracking-[-1px] mt-7 max-md:text-[40px]">
        Smart MCP
      </h2>
      <h2 className="text-[52px] font-semibold leading-none tracking-[-1px] mt-[23px] max-md:max-w-full max-md:text-[40px]">
        Recommendations
      </h2>
      <p className="text-xl leading-[31px] mt-[27px] max-md:max-w-full">
        Our AI analyzes your needs and suggests the perfect Model Control <br />
        Panels to optimize your specific use cases and workflows.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8 mt-16 w-full max-w-6xl">
        <div className="flex-1">
          <Card className="h-full bg-white overflow-hidden shadow-[0px_15px_30px_rgba(0,0,0,0.08)] border border-[rgba(34,34,34,0.1)]">
            <CardContent className="p-8">
              <div className="bg-[#8B5CF6]/10 w-10 h-10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-left">How It Works</h3>
              
              <div className="space-y-8 text-left">
                <div className="flex gap-4">
                  <div className="bg-[#8B5CF6] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Describe Your Needs</h4>
                    <p className="text-gray-600 text-sm">Tell us about your LLM use cases, preferred outputs, and specific requirements.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-[#8B5CF6] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">AI Analysis</h4>
                    <p className="text-gray-600 text-sm">Our algorithms analyze your needs and match them with our library of MCPs.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-[#8B5CF6] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Personalized Recommendations</h4>
                    <p className="text-gray-600 text-sm">Receive a curated list of MCPs ranked by relevance to your specific needs.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-[#8B5CF6] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Ongoing Optimization</h4>
                    <p className="text-gray-600 text-sm">As you use MCPs, our AI continues to refine recommendations based on your feedback.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex-1">
          <Card className="h-full bg-gradient-to-br from-[#8B5CF6]/80 to-[#6366F1] text-white overflow-hidden border-0 shadow-[0px_15px_30px_rgba(139,92,246,0.2)]">
            <CardContent className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6 text-left">Try Our AI Recommendation Engine</h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 text-left">
                <p className="text-white/90 italic">
                  "I need an MCP that can help my customer service chatbot understand customer sentiment and respond appropriately while maintaining brand voice."
                </p>
              </div>
              
              <div className="space-y-4 text-left flex-grow">
                <h4 className="font-medium">Top Recommendations:</h4>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f5a7cd21ff8ea07d50364c77d25650184a93697?placeholderIfAbsent=true" alt="Icon" className="w-4 h-4" />
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-medium text-sm">Customer Support Sentiment Analyzer</h5>
                    <p className="text-white/70 text-xs">98% match for your needs</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3828436c852f4c440bcb2c6c8cb13c082e1d1f35?placeholderIfAbsent=true" alt="Icon" className="w-4 h-4" />
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-medium text-sm">Brand Voice Consistency Enhancer</h5>
                    <p className="text-white/70 text-xs">93% match for your needs</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b841f8b5ed3bed3593ef42e1675bb83155b2ae1?placeholderIfAbsent=true" alt="Icon" className="w-4 h-4" />
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-medium text-sm">Multilingual Customer Support Enhancer</h5>
                    <p className="text-white/70 text-xs">87% match for your needs</p>
                  </div>
                </div>
              </div>
              
              <Button variant="white" className="mt-6 w-full">Get Your Recommendations</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MCPRecommendations;
