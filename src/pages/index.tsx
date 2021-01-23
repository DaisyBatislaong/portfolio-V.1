import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";

const index = ({ data }: any) => {
   return (
      <Layout>
         <section className="flex flex-col items-center">
            <Img fluid={data.pic.background.fluid} className="rounded-full" style={{ width: "15rem" }} />
            <h1 className="font-roboto-bold text-2xl">Hello I am Daisy, A Front End Developer</h1>
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
