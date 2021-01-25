import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import SocialItem from "./SocialItem";
import { Github } from "@icons-pack/react-simple-icons";

const Projects = () => {
   const data = useStaticQuery(graphql`
      {
         port: allContentfulPortfolio {
            nodes {
               title
               url {
                  website
                  github
               }
               tech {
                  content
               }
               des {
                  des
               }
               img {
                  fluid {
                     ...GatsbyContentfulFluid_tracedSVG
                  }
               }
            }
         }
      }
   `);

   return (
      <section className="grid">
         {data.port.nodes.map(({ title, url, tech, des, img, index }) => {
            return (
               <article key={index} className="flex items-center">
                  <Img fluid={img[0].fluid} style={{ width: "40rem" }} />
                  
                  <div className="flex flex-col items-end">
                     <h4 className="font-cabin-regular">Featured Project</h4>
                     <h5 className="font-roboto-bold">{title}</h5>
                     <p className="">{des.des}</p>
                     <ul className="flex space-x-6">
                        {tech.map((item, index) => {
                           return <li key={index}>{item.content}</li>;
                        })}
                     </ul>
                     <div className="flex space-x-6">
                        <SocialItem link={url.github}>
                           <Github />
                        </SocialItem>
                        <SocialItem link={url.website}>
                           {" "}
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                           </svg>
                        </SocialItem>
                     </div>
                  </div>
               </article>
            );
         })}
      </section>
   );
};

export default Projects;
