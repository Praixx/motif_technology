import { FaLinkedinIn } from "react-icons/fa";
import Jean from "../assets/Jean-Michel.png"


function TestimonialDetails() {
    return (
      <div className="flex items-center justify-between pr-3" >
        <div>
          <div className="flex items-center justify-center">
            <img src={Jean} alt="" className="w-1/4" />
            <div className="ml-2">
              <h4 className="text-small md:text-normal font-semibold">Jean-Michel Moreau</h4>
              <p className="text-xs md:text-sm">CPO at Peerplays</p>
            </div>
          </div>
        </div>
        <div>
          <FaLinkedinIn className="text-stone-500" />
        </div>
      </div>
    );
}

export default TestimonialDetails
