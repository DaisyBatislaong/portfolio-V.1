import React from "react";
import { socialLinks } from "../data/data";
import SocialItem from "./SocialItem";


const SocialLinks = () => {

   return (
      <div className="flex space-x-6">
         {socialLinks.map((social) => {
            return (
               <SocialItem link={social.link} >
                  {<social.icon color={social.color} size={30} />}
               </SocialItem>
            );
         })}
      </div>
   );
};

export default SocialLinks;
