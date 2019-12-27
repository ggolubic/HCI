import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"

import Movie from "./components/Movie/Movie"

const MovieTemplate = ({ pageContext: { movie } }) => {
  return (
    <Layout>
      <SEO title={movie.title} />
      <Movie movie={movie} />
    </Layout>
  )
}

export default MovieTemplate
