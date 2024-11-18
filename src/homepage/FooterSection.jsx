import FooterLogo from "../assets/footer-logo.png";
import Button from "../ui/Button";
import IndustriesFooter from "../ui/IndustriesFooter";
import ResourceFooter from "../ui/ResourceFooter";
import ReviewFooter from "../ui/ReviewFooter";
import ServiceFooter from "../ui/ServiceFooter";
import SolutionsFooter from "../ui/SolutionsFooter";

function FooterSection() {
  return (
    <div className="mt-10 bg-black pl-9 pr-8 pt-14 pb-20 text-stone-50 md:flex md:gap-28 ">
      <div className="mb-24 flex items-center justify-center gap-10 md:mb-0 md:block">
        <div className="md:mb-3">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="pt-4 pb-4">
          <h1 className="mb-4 font-semibold capitalize">
            Looking for a Software solution Development Partner?
          </h1>
          <Button />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-10 md:grid-cols-[1fr_1fr_1fr] text-left justify-center">
        <ServiceFooter />
        <IndustriesFooter />
        <SolutionsFooter />
        <ResourceFooter />
        <ResourceFooter />
        <ReviewFooter />
      </div>
    </div>
  );
}

export default FooterSection;
