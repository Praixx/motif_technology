import CaseStudyHome from "../homepage.jsx/CaseStudyHome";
import ExecutionSection from "../homepage.jsx/ExecutionSection";
import MainSection from "../homepage.jsx/MainSection";
import SoftwareConsultancy from "../homepage.jsx/SoftwareConsultancy";
import SoftwareSection from "../homepage.jsx/SoftwareSection";
import Sponsors from "../homepage.jsx/Sponsors";
import TestimonialSection from "../homepage.jsx/TestimonialSection";
import SpecialButton from "../ui/SpecialButton";

function Homepage() {
  return (
    <>
      <div className="mt-5 grid items-center justify-center">
        <MainSection />
        <Sponsors />
        <ExecutionSection />
        <SoftwareSection />
        <CaseStudyHome />
        <SpecialButton />
        <SoftwareConsultancy />
        <TestimonialSection />
      </div>
    </>
  );
}

export default Homepage;
