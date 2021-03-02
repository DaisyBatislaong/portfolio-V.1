import React from "react";
import { aboutMe, technologies } from "../data/data";
import TitleHero from "./TitleHero";

const About = () => {
   return (
      <React.Fragment>
         <div className="my-44 mx-20 md:mx-52 space-y-8">
            <TitleHero title="About Me" />
            <p className="text-justify">{aboutMe}</p>
            <h4 className="text-2xl">Technologies that I use:</h4>
            <ul className="flex flex-wrap flex-col space-y-6 md:flex-row md:space-x-12 md:space-y-0">
               {technologies.map((tech, index) => {
                  return (
                     <li key={index} className="flex flex-col items-center">
                        <div>{<tech.icon color={tech.color} size={50} />}</div>
                        <h6>{tech.name} </h6>
                     </li>
                  );
               })}
            </ul>
         </div>
      </React.Fragment>
   );
};

export default About;
