
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
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/7a184d09-d746-424c-9516-bf30f135ac0f.png"
              alt="Amplify Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="text-lg font-bold text-[#003366]">Amplify</span>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              <a href="#marketplace" className="text-gray-700 hover:text-[#003366] transition-colors text-base font-medium">
                Marketplace
              </a>
              <a href="#features" className="text-gray-700 hover:text-[#003366] transition-colors text-base font-medium">
                Features
              </a>
              <a href="#ai-recommendations" className="text-gray-700 hover:text-[#003366] transition-colors text-base font-medium">
                AI Recommendations
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#003366] transition-colors text-base font-medium">
                Pricing
              </a>
              <a href="#help" className="text-gray-700 hover:text-[#003366] transition-colors text-base font-medium">
                Help
              </a>
            </div>
            <Button size="sm" className="ml-8 bg-[#003366] hover:bg-[#002244]">Get Started</Button>
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
            <a href="#marketplace" className="text-gray-700 hover:text-[#003366] transition-colors py-2 block text-base font-medium">
              Marketplace
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#003366] transition-colors py-2 block text-base font-medium">
              Features
            </a>
            <a href="#ai-recommendations" className="text-gray-700 hover:text-[#003366] transition-colors py-2 block text-base font-medium">
              AI Recommendations
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#003366] transition-colors py-2 block text-base font-medium">
              Pricing
            </a>
            <a href="#help" className="text-gray-700 hover:text-[#003366] transition-colors py-2 block text-base font-medium">
              Help
            </a>
            <div className="pt-2">
              <Button size="sm" className="w-full bg-[#003366] hover:bg-[#002244]">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
