import React from "react";
import { Link } from "gatsby";
import { IntrinsicElementsKeys } from "styled-components";

interface Iprops {
   link: string;
   children: any;
}
const SocialItem = ({ link, children }: Iprops) => {
   const hover = "transition duration-400 ease-in transform hover:-translate-y-1 hover:scale-110";
   return (
      <Link to={link} target="_blank" className={hover}>
         {children}
      </Link>
   );
};

export default SocialItem;
