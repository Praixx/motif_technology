import Faq from "../ui/Faq";


function FaqSection() {
  return (
    <div className="mt-8 flex flex-col pl-8 pr-8 md:ml-11 md:mr-11 md:mt-14 md:grid md:grid-cols-[1fr_1fr] md:gap-10">
      <div>
        <h1 className="pb-9 text-3xl font-bold md:mt-8 md:w-4/5 md:pb-0 md:text-5xl">
          Frequently Asked Questions
        </h1>
      
      </div>
      <div>
        <Faq />
      </div>
    </div>
  );
}

export default FaqSection;
 