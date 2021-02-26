
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  title: string
  description: string

}
interface IPass{
  defaultTitle: string
  defaultDescription: string
  titleTemplate: any
}

const SEO = ({ title, description }:Props) => {
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
  }:IPass = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }

  return(
    <Helmet title={seo.title} >
      <meta name="description" content={seo.description} />
    </Helmet>
  )
}


export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`

