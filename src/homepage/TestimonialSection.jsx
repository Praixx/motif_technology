import TestimonialCarousel from "../ui/TestimonialCarousel"

function TestimonialSection() {
    return (
      <div className=" mt-8 bg-stone-200 pb-20 pl-7 pr-4 pt-10  md:pb-20 md:pl-28 md:pr-32">
        <div>
          <h4 className="text-sm font-semibold uppercase">testimonials</h4>
          <h1 className="pb-6 pt-2 text-3xl font-bold capitalize tracking-wide md:text-5xl">
            clients about our
            <br /> cooperation
          </h1>
        </div>
        <div className="flex items-center justify-center">

        <TestimonialCarousel />
        </div>
        
      </div>
    );
}

export default TestimonialSection
