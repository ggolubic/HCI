import React from "react"
import Grid from "@kiwicom/orbit-components/lib/utils/Grid"

import SEO from "components/seo.js"
import Layout from "components/layout.js"
import SiteTitle from "common/SiteTitle/SiteTitle"

import MovieListing from "./components/MovieListing"

const MovieListTemplate = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <SEO title="Movies" />
      <SiteTitle>Top 20 Popular Movies</SiteTitle>
      <Grid
        rowGap="40px"
        maxWidth="100%"
        tablet={{
          columns: "45% 45%",
          columnGap: "2%",
        }}
      >
        {pageContext.movies.map((movie, index) => {
          return (
            <MovieListing
              key={index}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              overview={movie.overview}
              date={movie.release_date}
            />
          )
        })}
      </Grid>
    </Layout>
  )
}

export default MovieListTemplate
