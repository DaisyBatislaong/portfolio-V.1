import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import SocialItem from "./SocialItem";
import { Github } from "@icons-pack/react-simple-icons";


interface Iprops{
   title: string,
   url: {github:string, website:string},
   tech:[{content:string}]
   des:{des:string}
   img:any
   index:number
}


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
      <section className="grid auto-cols-auto py-8 gap-y-12">
         {data.port.nodes.map(({ title, url, tech, des, img, index }:Iprops) => {
            return (
               <article key={index} className="flex items-center space-x-7">
                  <Img fluid={img[0].fluid} style={{ "width": "30rem" }} className="" />
                  
                  <div className="flex flex-col items-end">
                     <h2 className="font-cabin-regular">Featured Project</h2>
                     <h1 className="font-roboto-bold text-2xl pt-2">{title}</h1>
                     <div className="relative w-96 text-right py-4"><p className="">{des.des}</p></div>
                     <ul className="flex space-x-6">
                        {tech.map((item, index) => {
                           return <li className="font-cabin-regular text-sm" key={index}>{item.content}</li>;
                        })}
                     </ul>
                     <div className="flex space-x-5 pt-2">
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
