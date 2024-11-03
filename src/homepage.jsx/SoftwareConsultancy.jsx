import { MdOutlineBrandingWatermark } from "react-icons/md";
import SoftwareCon from "../assets/softwarecon.png";
import Button from "../ui/Button";
import { FaDigitalOcean, FaLaptop } from "react-icons/fa";

function SoftwareConsultancy() {
  return (
    <div className="mt-16">
      <div className="mb-5 flex flex-col-reverse items-center justify-center md:flex-row md:gap-10 md:ml-20 md:mr-16">
        <div className="flex items-center justify-center">
          <img src={SoftwareCon} alt="" className="w-4/5 md:w-full" />
        </div>
        <div className="pl-7 pr-8 md:flex md:items-start md:flex-col md:justify-center text-left ">
          <h3 className="font-semibold uppercase">our services</h3>
          <h1 className="pb-4 text-3xl  font-bold capitalize tracking-wide md:text-5xl ">
            software consultancy
          </h1>
          <p className="pb-3 w-9/12">
            Give your product’s idea a shape. Plan and evaluate the essential
            features of your product to accomplish your business goals and
            eliminate possible mistakes.
          </p>
          <Button />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:mt-20 md:mb-20">
        <div className="group flex h-80 w-80 items-end bg-gradient-to-r from-blue-600 via-gray-300 to-blue-600">
          <h2 className="pb-3 pl-4 text-left text-xl font-bold">
            Software <br /> Consultancy
          </h2>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center md:grid md:grid-cols-[1fr_1fr_1fr]">
          <div className="mb-12 flex flex-col items-center justify-center">
            <MdOutlineBrandingWatermark className="text-8xl text-blue-600" />
            <h3 className="text-xl font-semibold">Business Branding</h3>
          </div>
          <div className="mb-12 flex flex-col items-center justify-center">
            <FaLaptop className="text-8xl text-blue-600" />
            <h3 className="text-xl font-semibold">
              custom software development
            </h3>
          </div>
          <div className="mb-5 flex flex-col items-center justify-center">
            <FaDigitalOcean className="text-8xl text-blue-600" />
            <h3 className="text-xl font-semibold">digital modernization</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftwareConsultancy;
