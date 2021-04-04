import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

interface Props{
title: string
}
const SEO = ({title}:Props) => {
   const data = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
               title
               description
            }
         }
      }
   `);
   return (
      <Helmet>
         <title> {title} | {data.site.siteMetadata.title}</title>
         <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
   );
};

export default SEO;
