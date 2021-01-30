import React from "react";
import SocialLinks from "./SocialLinks";
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby";

const MainSection = () => {
   
const data = useStaticQuery(graphql`
{
   pic: contentfulOtherContent(title: { eq: "portfolio" }) {
      background {
         fluid {
            ...GatsbyContentfulFluid_tracedSVG
         }
      }
   }
}
`);
   return (
      <section className="flex flex-col items-center justify-center h-full">
         <div>
            <Img fluid={data.pic.background.fluid} className="rounded-full" style={{ width: "17rem" }} />
         </div>
         <h4 className="font-roboto-bold text-4xl tracking-wider mt-4">Hello I am Daisy,</h4>
         <h2 className="font-roboto-bold text-2xl text-gray-700 mt-2 mb-8">A Front End Developer</h2>
         <SocialLinks />
      </section>
   );
};

export default MainSection;
