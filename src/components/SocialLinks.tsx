import React from "react";
import { socialLinks } from "../data/data";
import { Github, Gmail, Linkedin, Twitter } from "@icons-pack/react-simple-icons";
import SocialItem from "./SocialItem";
const hover = "transition duration-400 ease-in transform hover:-translate-y-1 hover:scale-110 cursor-pointer";
const SocialLinks = () => {
   const { github, twitter, linkedIn, gmail } = socialLinks;

   return (
      <div className="flex space-x-6">
         <SocialItem link={github}>
            <Github size={30} />
         </SocialItem>
         <SocialItem link={twitter}>
            <Twitter color="#00acee" size={30} />
         </SocialItem>
         <SocialItem link={linkedIn}>
            <Linkedin color="#0e76a8" size={30} />
         </SocialItem>
         <div className={hover}>
            <Gmail title="dtechimperium@gmail.com" color="#BB001B" size={30} />
         </div>
      </div>
   );
};

export default SocialLinks;
