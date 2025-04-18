
import React from "react";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex w-full flex-col text-black max-md:mt-10 h-full">
      <img src={icon} alt={title} className="aspect-[1] object-contain w-8" />
      <div className="flex flex-col overflow-hidden mt-5 flex-grow">
        <h3 className="text-[17px] font-semibold leading-none tracking-[-0.1px]">
          {title}
        </h3>

        <p className="text-[15px] font-normal leading-6 mt-2.5">
          {description.split(" ").length > 5 ? (
            <>
              {description.split(" ").slice(0,5).join(" ")} <br/> {description.split(" ").slice(5).join(" ")}
             </>
          ) : (
            description
          )}
        </p>
      </div>
      <a
        href="#learn-more"
        className="flex items-center gap-[5px] text-[15px] font-medium mt-6"
      >
        <span>Learn more</span>
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
};

export default FeatureCard;
