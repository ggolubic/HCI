import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import TvShow from "./components/TvShow/TvShow"

const TvShowTemplate = ({ pageContext: { show } }) => {
  return (
    <Layout>
      <SEO title={show.name} />
      <TvShow show={show} />
    </Layout>
  )
}
export default TvShowTemplate
