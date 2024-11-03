import { NavLink } from "react-router-dom";
import HeaderLogo from "../assets/logo.png";

function Logo({ children }) {
  return (
    // <div>
    //   <NavLink to="homepage" className="flex justify-center items-center">
    //     <img src={HeaderLogo} alt="Motif logo"  className="pr-4"/>
    //     {children}
    //   </NavLink>
    // </div>

    <div>
      <NavLink to="homepage" className="flex items-center justify-center">
        <img src={HeaderLogo} alt="Motif logo" className="pr-4" />
        <div className="flex flex-col items-left text-xl font-bold">
          motif
          <span>technology</span>
        </div>
      </NavLink>
    </div>
  );
}

export default Logo;
