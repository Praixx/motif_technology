import CTAButton from "../ui/CTAButton"
import CopyMain from "./CopyMain"

function MainSection() {
    return (
      <div className="  border-b px-14 md:mt-10 md:grid md:grid-cols-[2fr_1fr] md:gap-16">
        <CopyMain />
        <CTAButton />
      </div>
    );
}

export default MainSection
