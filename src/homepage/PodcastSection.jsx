import { FaLongArrowAltRight } from "react-icons/fa";
import PodcastCard from "../ui/PodcastCard";

function PodcastSection() {
  return (
    <div className="flex flex-col justify-center bg-black pl-5 pr-5 pt-7 text-stone-50 md:pr-14 md:pl-14">
      <div className="items-center mb-12 flex justify-between capitalize">
        <div>
          <h2 className="text-3xl md:text-5xl">our podcast</h2>
        </div>
        <div>
          <p className="cursor-pointer">
            view all{" "}
            <span className="rounded-full border border-gray-700 bg-gray-700 px-1 py-1">
              <FaLongArrowAltRight className="inline-block" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pl-5">
        <PodcastCard />
      </div>
    </div>
  );
}

export default PodcastSection;
