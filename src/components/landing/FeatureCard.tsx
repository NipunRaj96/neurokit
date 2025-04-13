import React from "react";

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
    <div className="flex w-full flex-col text-black max-md:mt-10">
      <img src={icon} alt={title} className="aspect-[1] object-contain w-8" />
      <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center mt-5">
        <h3 className="text-[17px] font-semibold leading-none tracking-[-0.1px]">
          {title}
        </h3>
        <p className="text-[15px] font-normal leading-6 mt-2.5">
          {description.split(" ").length > 5 ? (
            <>
              {description.split(" ").slice(0, 5).join(" ")} <br />
              {description.split(" ").slice(5).join(" ")}
            </>
          ) : (
            description
          )}
        </p>
      </div>
      <a
        href="#learn-more"
        className="flex items-stretch gap-[5px] text-[15px] font-medium text-center leading-loose mt-6"
      >
        <span className="grow my-auto">Learn more</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2256ee45bc548ced9489d6b6cb3568bd9b482ea?placeholderIfAbsent=true"
          alt="Arrow right"
          className="aspect-[1] object-contain w-4 shrink-0"
        />
      </a>
    </div>
  );
};

export default FeatureCard;
