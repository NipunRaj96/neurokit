
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
        "Access to 10 free MCPs",
        "Basic MCP analytics",
        "1 AI recommendation per day",
        "Community support",
        "Single user account",
      ],
      dark: false,
    },
    {
      name: "Pro",
      price: "$49",
      popular: true,
      buttonText: "Sign up now",
      buttonVariant: "white" as const,
      features: [
        "Access to all 200+ MCPs",
        "Advanced MCP analytics",
        "Unlimited AI recommendations",
        "Priority support",
        "5 team members",
        "Custom MCP creation",
        "API access",
      ],
      dark: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      popular: false,
      buttonText: "Contact sales",
      buttonVariant: "default" as const,
      features: [
        "All Pro features",
        "Unlimited team members",
        "White-labeled MCPs",
        "Custom integration support",
        "Dedicated account manager",
        "SLA guarantees",
        "Advanced security features",
        "Custom MCP marketplace",
        "API customization",
        "Priority feature requests",
      ],
      dark: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white z-0 flex w-full flex-col overflow-hidden items-center justify-center px-20 py-[85px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1000px] flex-col items-center max-md:max-w-full">
        <h2 className="text-black text-[51px] font-semibold leading-none tracking-[-1px] text-center max-md:text-[40px]">
          Pricing Plans
        </h2>
        <p className="text-black text-xl font-normal leading-loose text-center mt-[27px]">
          Choose the plan that fits your needs.
        </p>
        <p className="text-black text-xl font-normal leading-loose text-center mt-[11px]">
          All plans include access to our MCP marketplace.
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
