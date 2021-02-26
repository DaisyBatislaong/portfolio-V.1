import React from "react";
import { aboutMe, technologies } from "../data/data";
import TitleHero from "./TitleHero";

const About = () => {

   return (
      <article className="mx-52 mt-44">
         <section className="space-y-8">
            <TitleHero title="About Me" />
            <p className="text-justify">{aboutMe}</p>
            <h4 className="text-2xl">Technologies that I use:</h4>
            <ul className="flex space-x-12">
               {technologies.map((tech, index) => {
                  return (
                     <li key={index} className="flex flex-col items-center">
                        <div>{<tech.icon color={tech.color} size={50} />}</div>
                        <h6>{tech.name} </h6>
                     </li>
                  );
               })}
            </ul>
         </section>
      </article>
   );
};

export default About;
