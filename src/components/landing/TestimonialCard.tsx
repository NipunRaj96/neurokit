import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  username: string;
  content: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  name,
  username,
  content,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white shadow-[0px_10px_15px_rgba(0,0,0,0.08)] flex w-full flex-col overflow-hidden items-stretch justify-center py-0.5 rounded-[20px]",
        className,
      )}
    >
      <div className="border flex w-full flex-col items-stretch px-10 py-[42px] rounded-[20px] border-[rgba(34,34,34,0.1)] border-solid max-md:px-5">
        {content && (
          <p className="text-[15px] font-normal leading-6 mb-[26px]">
            {content}
          </p>
        )}
        <div className="flex items-stretch gap-2.5">
          <img
            src={avatar}
            alt={name || username}
            className="aspect-[1] object-contain w-[42px] shrink-0 rounded-[42px]"
          />
          <div className="flex flex-col items-stretch">
            {name && (
              <div className="text-[15px] font-medium leading-none">{name}</div>
            )}
            {username && (
              <div className="text-[15px] font-normal leading-loose mt-[7px]">
                {username}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
