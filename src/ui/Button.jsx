import { HiMiniPlay } from "react-icons/hi2";

function Button() {
  return (
    <button className="group flex items-center justify-center rounded-lg border-0 bg-blue-700 px-3 py-1 font-normal capitalize tracking-wide text-stone-100 transition-colors hover:text-white hover:ring hover:ring-offset-2 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed">
      click me <HiMiniPlay className="group-hover:text-white ml-3 text-gray-200" />
    </button>
  );
}

export default Button;
