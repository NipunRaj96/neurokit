
import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import MCPShowcase from "@/components/landing/MCPShowcase";
import FeatureSection from "@/components/landing/FeatureSection";
import ManagementSection from "@/components/landing/ManagementSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import MCPRecommendations from "@/components/landing/MCPRecommendations";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-20 py-px max-md:pl-5">
      <div className="bg-white relative w-full max-w-screen-xl max-md:max-w-full">
        <Navbar />
        <Hero />
        <div className="py-8"></div>
        <MCPShowcase />
        <div className="py-12"></div>
        <FeatureSection />
        <div className="py-12"></div>
        <ManagementSection />
        <div className="py-12"></div>
        <MCPRecommendations />
        <div className="py-12"></div>
        <PricingSection />
        <div className="py-12"></div>
        <TestimonialsSection />
        <div className="py-12"></div>
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
