
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { X, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b border-gray-200/50 shadow-sm">
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
          
          {/* Navigation Links - Desktop */}
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
            <Button size="sm" className="ml-2">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-2">
          <div className="flex flex-col space-y-3 px-4 pb-3 pt-2">
            <a href="#marketplace" className="text-gray-700 hover:text-gray-900 transition-colors py-2 block">
              Marketplace
            </a>
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors py-2 block">
              Features
            </a>
            <a href="#ai-recommendations" className="text-gray-700 hover:text-gray-900 transition-colors py-2 block">
              AI Recommendations
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors py-2 block">
              Pricing
            </a>
            <a href="#help" className="text-gray-700 hover:text-gray-900 transition-colors py-2 block">
              Help
            </a>
            <div className="pt-2">
              <Button size="sm" className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
