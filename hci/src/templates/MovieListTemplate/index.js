import React from "react"
import Grid from "@kiwicom/orbit-components/lib/utils/Grid"

import SEO from "components/seo.js"
import Layout from "components/layout.js"
import SiteTitle from "common/SiteTitle/SiteTitle"

import Card from "common/Card/Card"

const MovieListTemplate = ({
  pageContext: { heading, title, list, cardPath },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <SiteTitle>{heading}</SiteTitle>
      <Grid
        rowGap="40px"
        maxWidth="100%"
        tablet={{
          columns: "45% 45%",
          columnGap: "2%",
        }}
      >
        {list.map((movie, index) => {
          return (
            <Card
              key={index}
              id={movie.id}
              path={cardPath}
              title={movie.title || movie.name}
              poster={movie.poster_path}
              overview={movie.overview}
              date={movie.release_date || movie.first_air_date}
            />
          )
        })}
      </Grid>
    </Layout>
  )
}

export default MovieListTemplate
