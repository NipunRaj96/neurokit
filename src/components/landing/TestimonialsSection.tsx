import React from "react";
import { Badge } from "@/components/ui/badge";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection: React.FC = () => {
  // First column testimonials
  const column1Testimonials = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/85fe5cd7b8b0e28a5431dc194224550c21dadad8?placeholderIfAbsent=true",
      name: "Jamie Teller",
      username: "@jamietechguru00",
      content: "",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb9cd76b9fb0f6b8e529832fe5798500cea806fa?placeholderIfAbsent=true",
      name: "Alex Rivera",
      username: "@alexinnovates",
      content:
        "Our team's productivity has skyrocketed since we started using this tool.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c10d92a1ba81182b1d6bc7115a8923290a331982?placeholderIfAbsent=true",
      name: "Morgan Lee",
      username: "@morganleewhiz",
      content:
        "The ability to collaborate in real-time, combined with powerful project tracking features, has made it indispensable for our daily operations.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/e211a47248fca4a00d12bc09508b72f7954f68dc?placeholderIfAbsent=true",
      name: "Jamie Teller",
      username: "",
      content:
        "This app has completely transformed how I manage my projects and deadlines.",
    },
  ];

  // Second column testimonials
  const column2Testimonials = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/64612e2bfd154a4f9413c1dd595380fbee600e52?placeholderIfAbsent=true",
      name: "",
      username: "@caseyj",
      content: "",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/39611fde8ce3d4abd421e3e8f49dafc84f9ef4cf?placeholderIfAbsent=true",
      name: "Taylor Kim",
      username: "@taykimm",
      content:
        "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/5020f5963f7397e25e594449e55ee97084669343?placeholderIfAbsent=true",
      name: "Riley Smith",
      username: "@rileysmith1",
      content:
        "The customizability and integration capabilities of this app are top-notch.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f6411776d69922f1f3096dc03c27eeae06aeedc?placeholderIfAbsent=true",
      name: "Casey Jordan",
      username: "@caseyj",
      content:
        "I was amazed at how quickly we were able to integrate this app into our workflow.",
    },
  ];

  // Third column testimonials
  const column3Testimonials = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/85f7519683e6e6e00962729906bb8eb735aeacec?placeholderIfAbsent=true",
      name: "Sam Dawson",
      username: "@dawsontechtips",
      content: "tasks, track progress, and manage documents all in one place.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/32c449091c27b7426829ab2affd8d45a5ba98b17?placeholderIfAbsent=true",
      name: "Casey Harper",
      username: "@casey09",
      content:
        "Its user-friendly interface and robust features support our diverse needs.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/c697961ea04bb7d323770a2a8caf40ae97acb4c6?placeholderIfAbsent=true",
      name: "Jordan Patels",
      username: "@jpatelsdesign",
      content:
        "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/02987e90fb3ba4764c8a3a95c296bc2c6fda6b4d?placeholderIfAbsent=true",
      name: "Sam Dawson",
      username: "",
      content:
        "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    },
  ];

  return (
    <section className="z-0 flex w-full flex-col overflow-hidden items-center justify-center px-10 py-20 max-md:max-w-full max-md:px-5">
      <Badge className="self-stretch w-full text-center">Testimonials</Badge>
      <h2 className="text-black text-[52px] font-semibold leading-none tracking-[-1px] text-center mt-5 max-md:max-w-full max-md:text-[40px]">
        What our users say
      </h2>
      <div className="w-full max-w-[1200px] overflow-hidden mt-5 max-md:max-w-full">
        <div className="flex shrink-0 h-[150px] max-md:max-w-full" />
        <div className="z-10 mt-[-150px] max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[74%] max-md:w-full max-md:ml-0">
              <div className="z-10 mr-[-419px] w-full max-md:max-w-full">
                <div className="w-[725px] max-w-full ml-14">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-6/12 max-md:w-full max-md:ml-0">
                      <div className="flex h-[795px] grow flex-col items-center text-black">
                        <div className="flex max-w-full w-[420px] flex-col items-stretch justify-center pb-[43px] px-10 max-md:px-5">
                          {column1Testimonials.map((testimonial, index) => (
                            <TestimonialCard
                              key={index}
                              avatar={testimonial.avatar}
                              name={testimonial.name}
                              username={testimonial.username}
                              content={testimonial.content}
                              className={index > 0 ? "mt-5" : ""}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex h-[795px] flex-col items-center text-black">
                        <div className="flex max-w-full w-[420px] flex-col items-stretch justify-center pb-11 px-10 max-md:px-5">
                          {column2Testimonials.map((testimonial, index) => (
                            <TestimonialCard
                              key={index}
                              avatar={testimonial.avatar}
                              name={testimonial.name}
                              username={testimonial.username}
                              content={testimonial.content}
                              className={index > 0 ? "mt-5" : ""}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 h-[150px] max-md:max-w-full" />
              </div>
            </div>
            <div className="w-[26%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow text-[15px] text-black">
                <div className="flex flex-col items-stretch justify-center pb-[43px] px-10 max-md:px-5">
                  {column3Testimonials.slice(0, 2).map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      avatar={testimonial.avatar}
                      name={testimonial.name}
                      username={testimonial.username}
                      content={testimonial.content}
                      className={index > 0 ? "mt-5" : ""}
                    />
                  ))}
                </div>
                <div className="z-10 flex flex-col items-stretch justify-center pb-[43px] px-10 max-md:px-5">
                  {column3Testimonials.slice(2).map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      avatar={testimonial.avatar}
                      name={testimonial.name}
                      username={testimonial.username}
                      content={testimonial.content}
                      className={index > 0 ? "mt-5" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
