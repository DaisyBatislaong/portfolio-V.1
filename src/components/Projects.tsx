import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import TitleHero from "./TitleHero";
import SocialItem from "./SocialItem";

interface Iprops {
   title: string;
   url: { github: string; website: string };
   tech: [{ content: string }];
   des: { des: string };
   img: any;
   index: number;
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
                     ...GatsbyContentfulFluid
                  }
               }
            }
         }
      }
   `);

   return (
      <article className="mt-60 mx-52">
         <TitleHero title="Projects" />
         <section className="grid gap-y-20 mt-24">
            {data.port.nodes.map(({ title, url, tech, des, img, index }: Iprops) => {
               return (
                  <article key={index} className="grid grid-cols-2 gap-x-20">
                     <Img fluid={img[0].fluid} style={{ width: "30rem" }} />
                     <div className="flex flex-col items-end">
                        <p className="text-lg">Featured Project</p>
                        <h5 className="pt-2">{title}</h5>
                        <div className="relative md:w-96 md:text-right py-4">
                           <p className="">{des.des}</p>
                        </div>
                        <ul className="flex space-x-3">
                           {tech.map((item, index) => {
                              return (
                                 <li className="font-cabin-regular text-sm" key={index}>
                                    {item.content}
                                 </li>
                              );
                           })}
                        </ul>
                        <div className="flex space-x-4 mt-2">
                           <SocialItem link={url.github}>
                              <SiGithub size="2rem" />
                           </SocialItem>
                           <SocialItem link={url.website}>
                              <HiExternalLink size="2rem" />
                           </SocialItem>
                        </div>
                     </div>
                  </article>
               );
            })}
         </section>
      </article>
   );
};

export default Projects;
