import CaseStudy1 from "../assets/casestudy1.png";
import CaseStudy2 from "../assets/casestudy2.png";
import CaseStudy3 from "../assets/casestudy3.png";
import CaseStudy4 from "../assets/casestudy4.png";

function EachCaseStudy() {
  return (
    <div className="grid items-center justify-center md:mt-5 md:grid-cols-[1fr_1fr] md:gap-20">
      <div>
        <div className="flex flex-col items-center justify-center pb-20 md:mb-20 md:mt-28 md:block">
          <img src={CaseStudy1} alt="" className="w-3/5" />
          <p className="pb-3 pt-3 capitalize md:pt-8">
            consultancy app | Saudi arabia
          </p>
          <h3 className="w-8/12 text-center font-bold capitalize md:mr-36 md:w-full md:pb-6 md:pt-4 md:text-left md:text-2xl">
            one-stop platform for providing and finding qualified legal service
          </h3>
          <div className="mt-5">
            <span className="rounded-full border border-gray-200 bg-gray-200 p-2 font-light text-sm">
              legal services
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-20 md:block">
          <img src={CaseStudy2} alt="" className="w-3/5" />
          <p className="pb-3 pt-3 capitalize md:pt-8">SnapnDash | UAE</p>
          <h3 className="w-8/12 text-center font-bold capitalize md:mr-36 md:w-full md:pb-6 md:pt-4 md:text-left md:text-2xl">
            AR-Based Application for Streamlined Photo Printing
          </h3>
          <div className="mt-5">
            <span className="rounded-full border border-gray-200 bg-gray-200 p-2 font-light text-sm">
              {" "}
              Photo&Video
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex mb-20 flex-col items-center justify-center pb-20 md:block">
          {/* <div className="mb-20"> */}
          <img src={CaseStudy3} alt="" className="w-3/5" />
          <p className="pb-3 pt-3 capitalize md:pt-8">relfket one | USA</p>
          <h3 className="w-8/12 text-center font-bold capitalize md:mr-36 md:w-full md:pb-6 md:pt-4 md:text-left md:text-2xl">
            Work Augmentation & AR Content Management Platform to Enhance
            Enterprises Workspace
          </h3>
          <div className="mt-5">
            <span className="rounded-full border border-gray-200 bg-gray-200 p-2 font-light text-sm">
              Automotive and Manufacturing
            </span>
          </div>
          {/* </div> */}
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pb-20 md:block">
            <img src={CaseStudy4} alt="" className="w-3/5" />
            <p className="pb-3 pt-3 capitalize md:pt-8">
              Pay 10 | Saudi Arabia
            </p>
            <h3 className="w-8/12 text-center font-bold capitalize md:mr-36 md:w-full md:pb-6 md:pt-4 md:text-left md:text-2xl">
              All-inclusive Digital Wallet App for Middle East
            </h3>
            <div className="mt-5">
              <span className="mr-5 rounded-full border border-gray-200 bg-gray-200 p-2 font-light text-sm">
                FinTech
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-200 p-2 font-light text-sm">
                Finance & Banking
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachCaseStudy;
