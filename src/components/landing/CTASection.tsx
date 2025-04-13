
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="z-0 flex w-full flex-col items-center justify-center px-10 py-[140px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-[800px] max-w-full flex-col">
        <div className="z-10 mt-[-54px] mr-[-204px] mb-[-311px] max-md:max-w-full max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[30%] max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a74ac384de6d3a64ae0983efd5d59c90de1314?placeholderIfAbsent=true"
                alt="Decoration"
                className="aspect-[1] object-contain w-full max-md:mt-[35px]"
              />
            </div>
            <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex w-full flex-col mt-[63px] max-md:max-w-full max-md:mt-10">
                <h2 className="text-black text-[50px] font-semibold leading-none tracking-[-1px] text-center max-md:max-w-full max-md:text-[40px]">
                  Transform your LLMs today
                </h2>
                <div className="w-full mt-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-6/12 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch text-[15px] text-black font-normal text-center mt-[7px] max-md:mt-10">
                        <p className="leading-loose">
                          Join thousands of developers who are enhancing their AI 
                        </p>
                        <p className="leading-loose self-center mt-2.5">
                          applications with our specialized Model Control Panels.
                        </p>
                      </div>
                    </div>
                    <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/762f6ad9b437cfdb0c9891304ad4a5cb5167b580?placeholderIfAbsent=true"
                        alt="Decoration"
                        className="aspect-[1] object-contain w-full max-md:mt-9"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 overflow-hidden text-[15px] font-medium text-center justify-center mt-16">
        <Button size="lg" className="px-8">Explore the Marketplace</Button>
        <Button variant="outline" size="lg" className="px-8">Request Demo</Button>
      </div>
    </section>
  );
};

export default CTASection;
