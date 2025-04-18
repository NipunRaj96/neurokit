
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface MCPCardProps {
  title: string;
  description: string;
  author: string;
  rating: number;
  downloads: number;
  image: string;
  tags: string[];
}

const MCPCard: React.FC<MCPCardProps> = ({
  title,
  description,
  author,
  rating,
  downloads,
  image,
  tags,
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col border border-[rgba(34,34,34,0.1)] shadow-[0px_8px_16px_rgba(0,0,0,0.06)]">
      <CardHeader className="p-6 pb-2">
        <div className="flex items-start justify-between">
          <div className="rounded-full bg-black/5 p-2">
            <img src={image} alt={title} className="w-6 h-6" />
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-xs text-gray-500">{downloads.toLocaleString()} downloads</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-sm text-gray-600">by {author}</p>
      </CardHeader>
      
      <CardContent className="flex-grow p-6 pt-2">
        <p className="text-sm leading-relaxed text-gray-700 mt-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="default" className="bg-[rgba(13,13,13,0.05)] text-black border-transparent text-xs py-1">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-2 flex justify-between items-center">
        <Button variant="default" size="sm" className="w-full">Try this MCP</Button>
      </CardFooter>
    </Card>
  );
};

export default MCPCard;
