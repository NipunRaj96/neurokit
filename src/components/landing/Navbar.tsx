
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/28a12ec18c7d504adacd29dff7db73b6cdcecd9c?placeholderIfAbsent=true"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="ml-2 text-lg font-bold">Amplify</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#marketplace" className="text-gray-700 hover:text-gray-900 transition-colors">
              Marketplace
            </a>
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#ai-recommendations" className="text-gray-700 hover:text-gray-900 transition-colors">
              AI Recommendations
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#help" className="text-gray-700 hover:text-gray-900 transition-colors">
              Help
            </a>
            <Button className="ml-2">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
