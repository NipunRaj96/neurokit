
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
    <section id="pricing" className="bg-white z-0 w-full overflow-hidden py-24 px-10 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-center">
          Pricing Plans
        </h2>
        <p className="text-black text-xl font-normal leading-loose text-center mt-6">
          Choose the plan that fits your needs.
        </p>
        <p className="text-black text-xl font-normal leading-loose text-center mt-2">
          All plans include access to our MCP marketplace.
        </p>
        
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="w-full">
                <PricingCard
                  name={plan.name}
                  price={plan.price}
                  popular={plan.popular}
                  buttonText={plan.buttonText}
                  buttonVariant={plan.buttonVariant}
                  features={plan.features}
                  dark={plan.dark}
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
