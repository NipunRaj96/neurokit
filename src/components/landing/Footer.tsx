
import React from "react";
import { Instagram, Linkedin, Twitter, Facebook, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black z-0 w-full overflow-hidden py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company Info Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/39380b59e8d3ad40dc4e6f406fa9fbd452b46328?placeholderIfAbsent=true"
                alt="Logo"
                className="aspect-[0.97] object-contain w-[40px]"
              />
              <span className="text-white text-lg font-bold">Amplify</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Discover and deploy Model Control Panels (MCPs) <br />
              that enhance your AI applications with specialized <br />
              controls, optimized for your specific use cases.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
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
          © {new Date().getFullYear()} Amplify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
