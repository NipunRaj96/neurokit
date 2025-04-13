
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black z-0 flex min-h-[403px] w-full overflow-hidden justify-center max-md:max-w-full">
      <div className="flex min-w-60 w-full max-w-[1600px] items-stretch gap-[40px_100px] flex-wrap flex-1 shrink basis-[0%] pr-20 py-[74px] max-md:max-w-full">
        <div className="flex flex-col items-stretch">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39380b59e8d3ad40dc4e6f406fa9fbd452b46328?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-[0.97] object-contain w-[40px]"
            />
            <span className="text-white text-lg font-bold">Amplify Marketplace</span>
          </div>
          <p className="text-white text-[13px] font-medium leading-[18px] tracking-[-0.2px] mt-4 ml-5 max-md:ml-2.5">
            Discover and deploy Model Control Panels (MCPs) <br />
            that enhance your AI applications with specialized <br />
            controls, optimized for your specific use cases.
          </p>
          <div className="self-center flex w-[244px] max-w-full items-stretch gap-5 mt-[107px] max-md:mt-10">
            <a href="#" className="min-h-6 flex-1">
              <div className="min-h-6 w-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9148fbbde9549a87967ed66c2379e3070101b?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="aspect-[1] object-contain w-full"
                />
              </div>
            </a>
            <a href="#" className="min-h-6 flex-1">
              <div className="min-h-6 w-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1651c0c39e23916477ec6ce77232fb0f20a8d8cd?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="aspect-[1] object-contain w-full"
                />
              </div>
            </a>
            <a href="#" className="min-h-6 flex-1">
              <div className="min-h-6 w-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b95b04178277af37bdd898851c4a0ca87db41a9?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="aspect-[1] object-contain w-full"
                />
              </div>
            </a>
            <a href="#" className="min-h-6 flex-1">
              <div className="min-h-6 w-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4346792a1e918fee84d3a9fa316514fba63884a?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="aspect-[1] object-contain w-full"
                />
              </div>
            </a>
            <a href="#" className="min-h-6 flex-1">
              <div className="min-h-6 w-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c5ed186bac9e01be5eaf44988bed9125df71492?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="aspect-[1] object-contain w-full"
                />
              </div>
            </a>
            <a href="#" className="min-h-6 flex-1">
              <div className="min-h-6 w-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff74ee6bb88822a85668607b0fa9447ac2cd477b?placeholderIfAbsent=true"
                  alt="Social icon"
                  className="aspect-[1] object-contain w-full"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="grow shrink basis-auto my-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-3/12 max-md:w-full max-md:ml-0">
              <div className="flex flex-col text-[13px] text-white font-medium whitespace-nowrap text-center tracking-[-0.2px] max-md:mt-10">
                <h4 className="font-bold leading-none">Platform</h4>
                <a href="#" className="leading-none mt-[27px]">
                  Marketplace
                </a>
                <a href="#" className="leading-none self-stretch mt-7">
                  AI Recommendations
                </a>
                <a href="#" className="leading-none mt-[26px]">
                  MCP Analytics
                </a>
                <a href="#" className="text-sm leading-none mt-[26px]">
                  Integrations
                </a>
                <a href="#" className="leading-none mt-[27px]">
                  API
                </a>
              </div>
            </div>
            <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col text-[13px] text-white font-medium whitespace-nowrap text-center tracking-[-0.2px] max-md:mt-10">
                <h4 className="font-bold leading-none self-stretch">Company</h4>
                <a href="#" className="leading-none mt-[23px]">
                  About
                </a>
                <a href="#" className="leading-none mt-7">
                  Blog
                </a>
                <a href="#" className="leading-[1.4] mt-[26px]">
                  Careers
                </a>
                <a href="#" className="leading-none mt-[29px]">
                  Partners
                </a>
                <a href="#" className="leading-none mt-7">
                  Press
                </a>
                <a href="#" className="leading-none mt-7">
                  Contact
                </a>
              </div>
            </div>
            <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col text-[13px] text-white font-medium whitespace-nowrap text-center tracking-[-0.2px] max-md:mt-10">
                <h4 className="font-bold leading-none">Resources</h4>
                <a href="#" className="leading-[1.4] mt-[26px]">
                  MCP Documentation
                </a>
                <a href="#" className="leading-none self-stretch mt-[25px]">
                  Community
                </a>
                <a href="#" className="leading-none mt-[25px]">
                  Developer Hub
                </a>
                <a href="#" className="leading-none mt-[29px]">
                  Support
                </a>
              </div>
            </div>
            <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col text-[13px] text-white font-medium whitespace-nowrap text-center tracking-[-0.2px] max-md:mt-10">
                <h4 className="font-bold leading-none">Legal</h4>
                <a href="#" className="leading-none mt-[23px]">
                  Privacy
                </a>
                <a href="#" className="leading-none mt-[26px]">
                  Terms
                </a>
                <a href="#" className="leading-none self-stretch mt-[29px]">
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
