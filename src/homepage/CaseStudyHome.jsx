import EachCaseStudy from "./EachCaseStudy"

function CaseStudyHome() {
    return (
      <div className="flex flex-col mt-10 md:mb-80 md:ml-20 md:mr-20 md:mt-32 md:pl-5">
        <div className="mb-8 md:mb-0">
          <p className="uppercase pl-5 text-lg md:pl-0 md:pb-5">portfolio</p>
          <h1 className="font-bold text-3xl capitalize pl-5 md:pl-0 md:text-5xl">
            explore our case studies
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <EachCaseStudy />
        </div>
      </div>
    );
}

export default CaseStudyHome
