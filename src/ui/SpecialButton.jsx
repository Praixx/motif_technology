import { HiArrowDownRight } from "react-icons/hi2"

function SpecialButton() {
    return (
      <div className="flex flex-col mt-10 items-center justify-center text-blue-600">
        <button className="p-5 rounded-full text-blue-600 border-2 border-blue-600">
          {" "}
          <HiArrowDownRight />{" "}
            </button>
            <p>All Cases</p>
      </div>
    );
}

export default SpecialButton
