import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SocialLinks from "../components/SocialLinks";

const index = ({ data }: any) => {
   return (
      <Layout>
         <section className="flex flex-col items-center justify-center">
            <Img fluid={data.pic.background.fluid} className="rounded-full" style={{ width: "17rem" }} />
            <h1 className="font-roboto-bold text-4xl tracking-wider mt-4">Hello I am Daisy,</h1>
            <h2 className="font-roboto-bold text-2xl text-gray-700 mt-2 mb-8">A Front End Developer</h2>
            <SocialLinks />
         </section>
      </Layout>
   );
};

export default index;

export const query = graphql`
   {
      pic: contentfulOtherContent(title: { eq: "portfolio" }) {
         background {
            fluid {
               ...GatsbyContentfulFluid_tracedSVG
            }
         }
      }
   }
`;
