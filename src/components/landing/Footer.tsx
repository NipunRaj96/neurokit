
import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black z-0 w-full overflow-hidden py-16 relative">
      {/* 3D Element - Cylinder */}
      <div className="absolute left-[5%] top-10 opacity-20">
        <img 
          src="/lovable-uploads/20cc4774-1cd0-45f3-b8c3-7515b50371e4.png"
          alt="3D Cylinder Element"
          className="w-[140px] h-auto transform rotate-[30deg]"
        />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company Info Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/9980195e-2669-4dc1-acc8-735e614e6e20.png"
                alt="NeuroKit Logo"
                className="aspect-[0.97] object-contain w-[40px]"
              />
              <span className="text-white text-lg font-bold">NeuroKit</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Discover and deploy Model Control Panels (MCPs) <br />
              that enhance your AI applications with specialized <br />
              controls, optimized for your specific use cases.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="https://www.linkedin.com/in/nipunkumar01/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/NipunRaj96/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:info@neurokit.ai" className="text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://nipun.framer.website/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Columns */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Marketplace</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">AI Recommendations</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">MCP Analytics</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">API</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Partners</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">MCP Documentation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Community</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Developer Hub</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Support</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Legal</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} NeuroKit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
