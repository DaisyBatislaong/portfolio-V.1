import React from "react";
import { Link } from "@reach/router";
import { LinkContainer } from "../styles/Navbar";

const Navbar = () => {
   const [clicked, setClick] = React.useState<boolean>(false);
   const handleClick = () => {
      setClick(!clicked);
   };

   return (
      <nav className="w-full">
         <LinkContainer className=" absolute flex flex-col space-y-24 md:space-y-0 md:justify-end md:space-x-16  md:mr-12 md:pt-8 md:flex-row md:relative font-cabin-regular" clicked={clicked} onClick={handleClick}>
            <Link to="/">Home</Link>
            <Link to="/about/">About Me</Link>
            <Link to="/projects/">Projects</Link>
            <Link to="/contacts/">Contacts</Link>
         </LinkContainer>
         <ul className="md:hidden flex justify-end mr-6 pt-6  relative z-50">
            <li onClick={handleClick}>
               {clicked ? (
                  <svg className="w-10 h-10 fill-current text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
               ) : (
                  <svg className="{} w-10 h-10 fill-current text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
               )}, 
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
