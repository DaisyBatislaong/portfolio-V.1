import React from "react";
import { aboutMe, technologies } from "../data/data";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import TitleHero from "./TitleHero";

const About = () => {
   const data = useStaticQuery(graphql`
      {
         pic: contentfulOtherContent(title: { eq: "about" }) {
            background {
               fluid {
                  ...GatsbyContentfulFluid
               }
            }
         }
      }
   `);
   return (
      <article className="grid mx-8 mt-16 md:grid-cols-12 justify-center">
         <section className="col-start-1 col-end-8 space-y-8">
            <TitleHero title="About Me" />
            <p>{aboutMe}</p>

            <h4 className="text-2xl">Technologies that I use:</h4>
            <ul className="flex flex-col space-y-8 md:flex-row md:space-x-20 md:space-y-0 flex-wrap ">
               {technologies.map((tech, index) => {
                  return (
                     <li key={index} className="flex flex-col items-center justify-center place-self-center">
                        <div>{<tech.icon color={tech.color} size={50} />}</div>
                        <h6>{tech.name} </h6>
                     </li>
                  );
               })}
            </ul>
         </section>
         <section className="md:col-start-9 md:col-end-12">
            <Img fluid={data.pic.background.fluid} />
         </section>
      </article>
   );
};

export default About;
