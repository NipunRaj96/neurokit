
import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

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
        "bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden",
        className,
      )}
    >
      <div className="p-8 relative">
        <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-100" />
        
        {content && (
          <p className="text-gray-700 mb-6 relative z-10">
            "{content}"
          </p>
        )}
        
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name || username}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          />
          <div>
            {name && (
              <div className="text-gray-900 font-medium">{name}</div>
            )}
            {username && (
              <div className="text-gray-500 text-sm">
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
