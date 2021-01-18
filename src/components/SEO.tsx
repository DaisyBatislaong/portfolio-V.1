import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string
  lang?: string
  meta?: []
  title: string
}

const SEO = ({ description, lang, meta, title }: Props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  )
}

export default SEO
