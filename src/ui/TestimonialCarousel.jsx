import { useState } from "react";
import TestimonialDetails from "./TestimonialDetails";

function TestimonialCarousel() {
  const testimonials = [
    {
      title: "The client was blown away by the quality",
      content:
        "Motif technology delivered their work on time and within budget. The client was blown away by the quality and the team's ability to capture the original vision. Furthermore, the team demonstrated the utmost commitment to fulfilling the requirements of the project and offering creative solutions.",
      // image: TestimonialImage1,
      name: "John Doe",
      position: "CEO of Example Company",
    },
    {
      title: "Outstanding performance and creativity",
      content:
        "Motif Technology’s team not only met our expectations but also exceeded them with their innovative approach. Their dedication to quality and the seamless delivery of the project made a significant difference in our business operations.",
      // image: TestimonialImage2,
      name: "Jane Smith",
      position: "CTO of Tech Solutions",
    },
    {
      title: "A reliable and committed partner",
      content:
        "Working with Motif Technology was a wonderful experience. Their technical expertise and commitment to achieving our vision resulted in a product that perfectly matched our needs. Highly recommended!",
      // image: TestimonialImage3,
      name: "Michael Johnson",
      position: "Founder of Startify",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative mt-10 flex w-4/5 max-w-xl items-center justify-center overflow-hidden p-4 md:w-3/5 md:overflow-visible">
      <div
        className="mx-auto flex w-full items-center justify-center transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 85)}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mx-2 w-full flex-shrink-0 rounded-lg border border-gray-300 bg-white p-6 shadow-lg md:w-3/4"
          >
            <div>
              <h3 className="text-normal pb-3 pt-4 font-bold">
                {/* The client was blown away by the quality */}
                {testimonial.title}
              </h3>
              <p className="pb-7 tracking-wide">
                {/* Motif technology delivered their work on time and within budget.
                The client was blown away by the quality and the team's ability
                to capture the original vision. Furthermore, the team
                demonstrated the utmost commitment to fulfilling the
                requirements of the project and offering creative solutions. */}
                {testimonial.content}
              </p>
            </div>
            <div>
              <TestimonialDetails />
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 focus:outline-none"
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
