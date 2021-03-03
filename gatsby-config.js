require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
   siteMetadata: {
      title: "Daisy Jane Batislaong",
      description: "A front-end developer that specialized in ReactJS",
    
      // url: "https://www.doe.com", // No trailing slash allowed!
      // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
   },
   plugins: [
      `gatsby-plugin-typescript`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: `c2jlpkowjo08`,
            // Learn about environment variables: https://gatsby.dev/env-vars
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
         },
      },
   ],
   pathPrefix: "/portfolio-v.1",
};
