import React from "react";
import PricingCard from "./PricingCard";

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      popular: false,
      buttonText: "Get started for free",
      buttonVariant: "default" as const,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
      dark: false,
    },
    {
      name: "Pro",
      price: "$9",
      popular: true,
      buttonText: "Sign up now",
      buttonVariant: "white" as const,
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced analytics",
        "Export capabilities",
      ],
      dark: true,
    },
    {
      name: "Business",
      price: "$19",
      popular: false,
      buttonText: "Sign up now",
      buttonVariant: "default" as const,
      features: [
        "Unlimited project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
      dark: false,
    },
  ];

  return (
    <section className="bg-white z-0 flex w-full flex-col overflow-hidden items-center justify-center px-20 py-[85px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1000px] flex-col items-center max-md:max-w-full">
        <h2 className="text-black text-[51px] font-semibold leading-none tracking-[-1px] text-center max-md:text-[40px]">
          Pricing
        </h2>
        <p className="text-black text-xl font-normal leading-loose text-center mt-[27px]">
          Free forever. Upgrade for unlimited tasks,{" "}
        </p>
        <p className="text-black text-xl font-normal leading-loose text-center mt-[11px]">
          better security, and exclusive features.
        </p>
        <div className="self-stretch mt-11 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                <PricingCard
                  name={plan.name}
                  price={plan.price}
                  popular={plan.popular}
                  buttonText={plan.buttonText}
                  buttonVariant={plan.buttonVariant}
                  features={plan.features}
                  dark={plan.dark}
                  className={
                    index === 1 ? "mt-[104px]" : index === 0 ? "mt-[191px]" : ""
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
