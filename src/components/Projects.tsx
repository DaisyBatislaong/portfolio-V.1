import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";


const Projects = () => {
   const data = useStaticQuery(graphql`
      {
         port: allContentfulPortfolio {
            edges {
               node {
                  title
                  url {
                     github
                     website
                  }
                  tech {
                     content
                  }
                  des {
                     des
                  }
                  img {
                     fluid {
                        src
                     }
                  }
               }
            }
         }
      }
   `);
   return (
      <section>
         {data.port.edges.map((edge)=>{
            return(
               <article>{edge.node.title}
               {edge.node.des.des}
               <a href={edge.node.url.website}>Cool</a>
               </article>
            )
         })}
      </section>
   );
};

export default Projects;
