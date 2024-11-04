import { FaLinkedinIn } from "react-icons/fa";
import Jean from "../assets/Jean-Michel.png"


function TestimonialDetails() {
    return (
      <div className="flex items-center justify-between" >
        <div>
          <div className="flex items-center justify-center">
            <img src={Jean} alt="" />
            <div className="ml-2">
              <h4 className="font-semibold">Jean-Michel Moreau</h4>
              <p className="text-sm">CPO at Peerplays</p>
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
