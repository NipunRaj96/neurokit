
import React from "react";
import { Badge } from "@/components/ui/badge";
import TestimonialCard from "./TestimonialCard";
import { Quote } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/85fe5cd7b8b0e28a5431dc194224550c21dadad8?placeholderIfAbsent=true",
      name: "Jamie Teller",
      username: "@jamietechguru00",
      content: "This app has completely transformed how I manage my LLM projects and deadlines.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb9cd76b9fb0f6b8e529832fe5798500cea806fa?placeholderIfAbsent=true",
      name: "Alex Rivera",
      username: "@alexinnovates",
      content: "Our team's productivity has skyrocketed since we started using Amplify's MCPs.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c10d92a1ba81182b1d6bc7115a8923290a331982?placeholderIfAbsent=true",
      name: "Morgan Lee",
      username: "@morganleewhiz",
      content: "The ability to collaborate in real-time with the model control panels has made it indispensable for our AI operations.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/39611fde8ce3d4abd421e3e8f49dafc84f9ef4cf?placeholderIfAbsent=true",
      name: "Taylor Kim",
      username: "@taykimm",
      content: "Planning and executing AI events has never been easier. Amplify helps me keep track of all the moving parts.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/5020f5963f7397e25e594449e55ee97084669343?placeholderIfAbsent=true",
      name: "Riley Smith",
      username: "@rileysmith1",
      content: "The customizability and integration capabilities of Amplify's MCPs are top-notch.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c697961ea04bb7d323770a2a8caf40ae97acb4c6?placeholderIfAbsent=true",
      name: "Jordan Patels",
      username: "@jpatelsdesign",
      content: "Adopting these MCPs for our team has streamlined our AI management and improved communication across the board.",
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-50 px-10 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
            What our users say
          </h2>
          <div className="flex items-center justify-center text-gray-600">
            <Quote className="h-5 w-5 mr-2 rotate-180" />
            <p className="text-lg text-center max-w-xl">
              Join thousands of AI developers who are enhancing their applications with our MCPs
            </p>
            <Quote className="h-5 w-5 ml-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              username={testimonial.username}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
