import React from "react";

const LogoSection: React.FC = () => {
  return (
    <section className="bg-white z-0 flex w-full flex-col overflow-hidden items-center justify-center p-10 max-md:max-w-full max-md:px-5">       
      <div className="flex w-full max-w-[1200px] flex-col max-md:max-w-full max-md:pr-5">
        <div className="flex min-h-[82px] items-center gap-5">
          <div className="self-stretch flex min-w-60 items-stretch gap-[40px_50px] w-[838px] my-auto px-px max-md:max-w-full">
            <div className="min-h-[26px] pr-0.5">
              <div className="flex min-h-[26px] w-[26px]" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="self-stretch flex min-h-[26px] flex-col pl-11">
                <div className="flex min-h-[26px] w-[26px]" />
              </div>
              <div className="text-black text-[15px] font-bold leading-none self-stretch my-auto">
                Quantum
              </div>
              <div className="self-stretch flex min-h-[22px] flex-col my-auto pl-11">
                <div className="min-h-[22px] w-[22px] overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/832d08a2f1a01114225d7c1a04f087110469025f?placeholderIfAbsent=true"
                    alt="Logo"
                    className="aspect-[1] object-contain w-full"
                  />
                </div>
              </div>
              <div className="text-black text-base font-semibold leading-[1.2] tracking-[-0.4px] self-stretch my-auto">
                Echo Valley
              </div>
            </div>
            <div className="text-black text-base font-bold leading-[1.2] my-auto">
              PULSE
            </div>
            <div className="flex items-stretch gap-1.5">
              <div className="min-h-6">
                <div className="min-h-6 w-6 overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b85332a686df9483bd266011e907486f48bbfcd?placeholderIfAbsent=true"
                    alt="Logo"
                    className="aspect-[1] object-contain w-full"
                  />
                </div>
              </div>
              <div className="text-black text-base font-bold leading-[1.2] my-auto">
                APEX
              </div>
            </div>
            <div className="flex items-stretch gap-1.5">
              <div className="min-h-6">
                <div className="min-h-6 w-6 overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7c6cd87b8fb4815a5b1b3f73736a4d5e50eb7e6?placeholderIfAbsent=true"
                    alt="Logo"
                    className="aspect-[1] object-contain w-full"
                  />
                </div>
              </div>
              <div className="text-black text-[15px] font-bold leading-[1.3] my-auto">
                Celestial
              </div>
            </div>
          </div>
          <div className="self-stretch flex min-w-60 items-stretch gap-[40px_52px] flex-wrap w-[838px] my-auto pr-[70px] max-md:max-w-full">
            <div className="flex items-center gap-2 grow shrink basis-auto max-md:max-w-full">
              <div className="self-stretch min-h-[26px]">
                <div className="min-h-[26px] w-[26px] overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c10dfc9d4b09a3b1de9d04202d8ffa3dc190871?placeholderIfAbsent=true"
                    alt="Logo"
                    className="aspect-[1] object-contain w-full"
                  />
                </div>
              </div>
              <div className="text-black text-base font-bold leading-none self-stretch my-auto">
                Acme Corp
              </div>
              <div className="self-stretch flex min-h-[26px] flex-col pl-[42px]">
                <div className="min-h-[26px] w-[26px] overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f5a7cd21ff8ea07d50364c77d25650184a93697?placeholderIfAbsent=true"
                    alt="Logo"
                    className="aspect-[1] object-contain w-full"
                  />
                </div>
              </div>
              <div className="text-black text-[15px] font-bold leading-none self-stretch my-auto">
                Quantum
              </div>
              <div className="self-stretch flex min-h-[22px] flex-col my-auto pl-[42px]">
                <div className="min-h-[22px] w-[22px] overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5873220cd8f9c399f4e4a6e4308a3d1cb52ae91b?placeholderIfAbsent=true"
                    alt="Logo"
                    className="aspect-[1] object-contain w-full"
                  />
                </div>
              </div>
              <div className="text-black text-base font-semibold leading-[1.2] tracking-[-0.4px] self-stretch my-auto">
                Echo Valley
              </div>
            </div>
            <div className="flex items-stretch gap-[40px_89px] grow shrink basis-auto">
              <div className="text-black text-base font-bold leading-[1.2] my-auto">
                PULSE
              </div>
              <div className="min-h-6">
                <div className="flex min-h-6 w-6" />
              </div>
              <div className="min-h-6">
                <div className="flex min-h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
