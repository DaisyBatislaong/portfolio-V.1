import React from "react";
import { Link } from "gatsby";
import { LinkContainer } from "../styles/Navbar";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
   const [clicked, setClick] = React.useState<boolean>(false);
   const handleClick = () => {
      setClick(!clicked);
   };

   return (
      <nav className="w-full">
         <LinkContainer className=" absolute flex flex-col space-y-24 md:space-y-0 md:justify-end md:space-x-16  md:mr-12 md:pt-8 md:flex-row md:relative font-cabin-regular" clicked={clicked} onClick={handleClick}>
            <Link to="/">Daisy Jane Batislaong</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contacts" className="">Contacts</Link>
         </LinkContainer>
         <ul className="md:hidden flex justify-end pt-6 mr-6 relative z-50">
            <li onClick={handleClick}>
               {clicked ? (
                  <HiX size="2rem" className="text-white"/>
               ) : (
                  <HiMenuAlt3 size="2rem" className="text-black"/>
               )}
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
