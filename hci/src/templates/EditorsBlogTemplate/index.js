import React from "react"
import Layout from "components/layout.js"
import SEO from "components/seo.js"
import SiteTitle from "common/SiteTitle/SiteTitle"

const EditorsBlogTemplate = ({
  pageContext: { heading, title, list, cardPath },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <SiteTitle>{heading}</SiteTitle>
    </Layout>
  )
}

export default EditorsBlogTemplate
