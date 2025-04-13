import React from "react";
import { Badge } from "@/components/ui/badge";

const ManagementSection: React.FC = () => {
  return (
    <section className="bg-white z-0 flex w-full flex-col overflow-hidden items-center text-black font-normal text-center px-10 py-20 max-md:max-w-full max-md:px-5">
      <Badge className="w-[151px] text-center">Everything you need</Badge>
      <h2 className="text-[53px] font-semibold leading-none tracking-[-1px] mt-7 max-md:text-[40px]">
        Streamlined for{" "}
      </h2>
      <h2 className="text-[52px] font-semibold leading-none tracking-[-1px] mt-[23px] max-md:max-w-full max-md:text-[40px]">
        easy management
      </h2>
      <p className="text-xl leading-[31px] mt-[27px] max-md:max-w-full">
        Enjoy customizable lists, team work tools, and smart <br />
        tracking all in one place. Set tasks, get reminders, and{" "}
      </p>
      <p className="text-xl leading-loose mt-[11px]">
        see your progress simply and quickly.{" "}
      </p>
      <div className="self-stretch flex items-center gap-5 text-[15px] justify-center flex-wrap mt-16 max-md:mt-10">
        <div className="bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.1)] self-stretch relative min-w-60 overflow-hidden flex-1 shrink basis-[0%] my-auto p-10 rounded-[20px] border border-[rgba(34,34,34,0.1)] max-md:max-w-full max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c3130c3b9e0d6d7724b8cd4d8757f30b2bd968?placeholderIfAbsent=true"
            alt="Integration ecosystem"
            className="aspect-[1.3] object-contain w-full z-0 max-md:max-w-full"
          />
          <div className="z-0 flex w-full flex-col overflow-hidden items-stretch justify-center mt-[30px] px-20 py-1.5 max-md:max-w-full max-md:px-5">
            <div className="flex flex-col items-center">
              <h3 className="text-[25px] font-semibold leading-none tracking-[-0.6px]">
                Integration ecosystem
              </h3>
              <p className="leading-6 self-stretch mt-[18px]">
                Enhance your productivity by connecting <br />
                with your favorite tools, keeping all your{" "}
              </p>
              <p className="leading-loose mt-2.5">essentials in one place.</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.1)] self-stretch relative min-w-60 overflow-hidden flex-1 shrink basis-[0%] my-auto p-10 rounded-[20px] border border-[rgba(34,34,34,0.1)] max-md:max-w-full max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcad89d5243b55f92f81f85dba2892147d6b92f6?placeholderIfAbsent=true"
            alt="Goal setting and tracking"
            className="aspect-[1.3] object-contain w-full z-0 max-md:max-w-full"
          />
          <div className="z-0 flex w-full flex-col overflow-hidden items-center justify-center mt-[30px] px-20 py-1.5 max-md:max-w-full max-md:px-5">
            <div className="flex w-[283px] max-w-full flex-col items-stretch">
              <h3 className="text-2xl font-semibold leading-none tracking-[-0.6px] max-md:mr-[3px]">
                Goal setting and tracking
              </h3>
              <p className="leading-6 mt-[19px] max-md:ml-0.5">
                Define and track your goals, breaking <br />
                down objectives into achievable tasks to{" "}
              </p>
              <p className="leading-loose self-center mt-2.5">
                keep your targets in sight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
