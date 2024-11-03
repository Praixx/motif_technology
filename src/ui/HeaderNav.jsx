import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { HiBars3 } from "react-icons/hi2";

function HeaderNav() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function displayMenu() {
    setIsDisplayed((display) => !display);
    console.log(isDisplayed);
  }

  return (
    <nav className="ml-10 mr-10 flex items-center justify-between py-8  md:ml-32 md:mr-16">
      <Logo />
      <HiBars3
        className="block cursor-pointer text-5xl md:hidden"
        onClick={displayMenu}
      />

      <ul
        className={`absolute left-0 ${isDisplayed ? "top-[80px] z-10 opacity-100" : "top-[-400px] z-[-1] opacity-0"} z-[-1] w-full bg-white py-4 pl-7 opacity-0 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:justify-center md:py-0 md:pl-0 md:opacity-100`}
      >
        <li className="relative border-0 pb-3 pt-3 capitalize md:px-5 md:pb-2 md:transition-all md:duration-150 md:ease-out md:hover:rounded-lg md:hover:border-b-2 md:hover:border-blue-500 md:hover:before:absolute md:hover:before:bottom-0 md:hover:before:left-0 md:hover:before:h-1/2 md:hover:before:w-0 md:hover:before:rounded-l-full md:hover:before:bg-blue-500 md:hover:after:absolute md:hover:after:bottom-0 md:hover:after:left-0 md:hover:after:h-1/2 md:hover:after:w-0 md:hover:after:border-l-2 md:hover:after:border-blue-500 md:hover:after:content-['']">
          <NavLink
            to="services"
            className="flex items-center justify-center disabled:cursor-not-allowed md:focus:rounded-lg md:focus:px-4 md:focus:py-2 md:focus:outline-none md:focus:ring md:focus:ring-offset-1"
          >
            Services <HiChevronDown className="pl-1 pt-1" />
          </NavLink>
        </li>
        <li className="relative border-0 pb-3 pt-3 capitalize md:px-5 md:pb-2 md:transition-all md:duration-150 md:ease-out md:hover:rounded-lg md:hover:border-b-2 md:hover:border-blue-500 md:hover:before:absolute md:hover:before:bottom-0 md:hover:before:left-0 md:hover:before:h-1/2 md:hover:before:w-0 md:hover:before:rounded-l-full md:hover:before:bg-blue-500 md:hover:after:absolute md:hover:after:bottom-0 md:hover:after:left-0 md:hover:after:h-1/2 md:hover:after:w-0 md:hover:after:border-l-2 md:hover:after:border-blue-500 md:hover:after:content-['']">
          <NavLink
            className="flex items-center justify-center focus:rounded-lg focus:px-2 focus:py-1 focus:outline-none focus:ring focus:ring-offset-1 disabled:cursor-not-allowed"
            to="caseStudies"
          >
            {" "}
            Case Studies
          </NavLink>
        </li>
        <li className="relative border-0 pb-3 pt-3 capitalize md:px-5 md:pb-2 md:transition-all md:duration-150 md:ease-out md:hover:rounded-lg md:hover:border-b-2 md:hover:border-blue-500 md:hover:before:absolute md:hover:before:bottom-0 md:hover:before:left-0 md:hover:before:h-1/2 md:hover:before:w-0 md:hover:before:rounded-l-full md:hover:before:bg-blue-500 md:hover:after:absolute md:hover:after:bottom-0 md:hover:after:left-0 md:hover:after:h-1/2 md:hover:after:w-0 md:hover:after:border-l-2 md:hover:after:border-blue-500 md:hover:after:content-['']">
          <NavLink
            className="flex items-center justify-center focus:rounded-lg focus:px-2 focus:py-1 focus:outline-none focus:ring focus:ring-offset-1 disabled:cursor-not-allowed"
            to="solution"
          >
            Solutions
          </NavLink>
        </li>
        <li className="relative border-0 pb-3 pt-3 capitalize md:px-5 md:pb-2 md:transition-all md:duration-150 md:ease-out md:hover:rounded-lg md:hover:border-b-2 md:hover:border-blue-500 md:hover:before:absolute md:hover:before:bottom-0 md:hover:before:left-0 md:hover:before:h-1/2 md:hover:before:w-0 md:hover:before:rounded-l-full md:hover:before:bg-blue-500 md:hover:after:absolute md:hover:after:bottom-0 md:hover:after:left-0 md:hover:after:h-1/2 md:hover:after:w-0 md:hover:after:border-l-2 md:hover:after:border-blue-500 md:hover:after:content-['']">
          <NavLink
            className="flex items-center justify-center focus:rounded-lg focus:px-4 focus:py-2 focus:outline-none focus:ring focus:ring-offset-1 disabled:cursor-not-allowed"
            to="about"
          >
            About Us <HiChevronDown className="pl-1 pt-1" />
          </NavLink>
        </li>
        <li className="relative border-0 pb-3 pt-3 capitalize md:px-5 md:pb-2 md:transition-all md:duration-150 md:ease-out md:hover:rounded-lg md:hover:border-b-2 md:hover:border-blue-500 md:hover:before:absolute md:hover:before:bottom-0 md:hover:before:left-0 md:hover:before:h-1/2 md:hover:before:w-0 md:hover:before:rounded-l-full md:hover:before:bg-blue-500 md:hover:after:absolute md:hover:after:bottom-0 md:hover:after:left-0 md:hover:after:h-1/2 md:hover:after:w-0 md:hover:after:border-l-2 md:hover:after:border-blue-500 md:hover:after:content-['']">
          <NavLink
            className="flex items-center justify-center focus:rounded-lg focus:px-2 focus:py-1 focus:outline-none focus:ring focus:ring-offset-1 disabled:cursor-not-allowed"
            to="insight"
          >
            Insights
          </NavLink>
        </li>
        <li className="flex items-center justify-center px-5 pb-3 pt-3">
          {/* <NavLink to="contact">Contact</NavLink> */}
          <Button />
        </li>
      </ul>
      
    </nav>
  );
}

export default HeaderNav;
