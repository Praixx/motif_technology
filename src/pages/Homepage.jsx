import BlogSection from "../homepage/BlogSection";
import CaseStudyHome from "../homepage/CaseStudyHome";
import ExecutionSection from "../homepage/ExecutionSection";
import FaqSection from "../homepage/FaqSection";
import FooterSection from "../homepage/FooterSection";
import MainSection from "../homepage/MainSection";
import PodcastSection from "../homepage/PodcastSection";
import SoftwareConsultancy from "../homepage/SoftwareConsultancy";
import SoftwareSection from "../homepage/SoftwareSection";
import Sponsors from "../homepage/Sponsors";
import TestimonialSection from "../homepage/TestimonialSection";
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
        <PodcastSection />
        <FaqSection />
        <BlogSection />
        <FooterSection />
      </div>
    </>
  );
}

export default Homepage;
