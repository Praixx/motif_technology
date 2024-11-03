import { HiMiniPlay } from "react-icons/hi2";
import Container from "../assets/Container.png";

function ExecutionSection() {
  return (
    <div className="pt-10 grid items-center justify-center md:ml-20 md:mr-9  md:pt-24">
      <div className="grid items-center justify-center text-center">
        <h1 className="md:text-5xl font-bold capitalize text-3xl">
          where ideas meet execution
        </h1>
        <p className="flex items-center pt-4 pb-4 cursor-pointer justify-center text-center md:text-base md:font-bold capitalize text-blue-600">
          watch more
          <span className="ml-1 inline-block rounded-full border-4 border-blue-600 p-2">
            <HiMiniPlay />
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img src={Container} alt="" className="w-4/5" />
      </div>
    </div>
  );
}

export default ExecutionSection;
