import React from "react";
import SEO from "./SEO";
import TitleHero from "./TitleHero";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Contacts = () => {
   const data = useStaticQuery(graphql`
      {
         contacts: allContentfulContacts {
            nodes {
               images {
                  fluid {
                     ...GatsbyContentfulFluid
                  }
               }
               links
            }
         }
      }
   `);

   return (
      <div>
         <SEO title="Contacts" />
         <TitleHero title="Contacts" />
         <section className="grid md:grid-cols-2 mt-10 gap-12">
            {data.contacts.nodes.map(({ images, links }:any) => {
               const check = links === "daisyjanebatislaong1124@gmail.com" ? `mailto: ${links}`:links
               const hover = "transition duration-400 ease-in transform hover:-translate-y-1 hover:scale-110";
               return (
                  <a href={check} target="blank" className={`w-48 md:w-96 border border-gray-300 rounded-lg ${hover}`}>
                     <Image fluid={images.fluid} />
                  </a>

               );
            })}
         </section>
      </div>
   );
};

export default Contacts;
