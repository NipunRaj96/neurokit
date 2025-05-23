
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MCPCard from "./MCPCard";

const MCPShowcase: React.FC = () => {
  const popularMCPs = [
    {
      title: "Sentiment Analyzer",
      description: "Extract sentiment and emotional tones from text with advanced linguistic analysis.",
      author: "AI Frameworks",
      rating: 4.9,
      downloads: 12540,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/17af7f5606c78bfc5dc242c6b46e1aa5c74a1e40?placeholderIfAbsent=true",
      tags: ["NLP", "Analytics", "Customer Support"],
    },
    {
      title: "Content Generator Pro",
      description: "Generate SEO-optimized content with customizable tone and style parameters.",
      author: "ContentCraft",
      rating: 4.8,
      downloads: 9870,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/af09d096247416c44f52a6472fbc87537480f00b?placeholderIfAbsent=true",
      tags: ["Content", "Marketing", "SEO"],
    },
    {
      title: "Code Assistant",
      description: "Intelligent coding companion with language-specific optimizations and documentation links.",
      author: "DevTools Inc",
      rating: 4.7,
      downloads: 15320,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3828436c852f4c440bcb2c6c8cb13c082e1d1f35?placeholderIfAbsent=true",
      tags: ["Development", "Coding", "Productivity"],
    },
    {
      title: "Research Navigator",
      description: "Navigate complex research topics with citation verification and source evaluation.",
      author: "Academic AI",
      rating: 4.6,
      downloads: 7650,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b841f8b5ed3bed3593ef42e1675bb83155b2ae1?placeholderIfAbsent=true",
      tags: ["Research", "Academic", "Education"],
    },
    {
      title: "Customer Support Bot",
      description: "Enhance customer interactions with intelligent query handling and sentiment adaptation.",
      author: "ServiceTech",
      rating: 4.9,
      downloads: 11230,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f5a7cd21ff8ea07d50364c77d25650184a93697?placeholderIfAbsent=true",
      tags: ["Support", "Business", "Automation"],
    },
    {
      title: "Legal Document Analyzer",
      description: "Analyze contracts and legal documents with specialized legal terminology understanding.",
      author: "LegalAI Solutions",
      rating: 4.8,
      downloads: 6420,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7c6cd87b8fb4815a5b1b3f73736a4d5e50eb7e6?placeholderIfAbsent=true",
      tags: ["Legal", "Document Analysis", "Business"],
    },
  ];

  return (
    <section id="marketplace" className="z-0 w-full bg-white py-24 px-10 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <Badge className="w-56 text-center mb-6">Top Model Context Protocols</Badge>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Discover powerful MCPs for your LLMs
          </h2>
          
          <p className="text-black text-xl font-normal leading-[31px] mt-6 max-w-2xl mx-auto">
            Browse our curated collection of Model Context Protocols that tailor your LLM responses for specific scenarios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
          {popularMCPs.map((mcp, index) => (
            <MCPCard 
              key={index}
              title={mcp.title}
              description={mcp.description}
              author={mcp.author}
              rating={mcp.rating}
              downloads={mcp.downloads}
              image={mcp.image}
              tags={mcp.tags}
            />
          ))}
        </div>
        
        <Button variant="outline" size="lg" className="mt-16 px-8">
          View All MCPs
        </Button>
      </div>
    </section>
  );
};

export default MCPShowcase;
