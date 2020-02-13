import React, { useState, useEffect } from "react"
import Grid from "@kiwicom/orbit-components/lib/utils/Grid"

import SEO from "components/seo.js"
import Layout from "components/layout.js"
import SiteTitle from "common/SiteTitle/SiteTitle"
import Card from "common/Card/Card"
import SearchBar from "common/SearchBar/SearchBar.styled.js"
import Flex from "common/Flex/Flex"

const MovieListTemplate = ({
  pageContext: { heading, title, list, cardPath },
}) => {
  const [search, setSearch] = useState("")
  const [filteredList, setFilteredList] = useState(list)
  const [direction, setDirection] = useState("row")
  let timeout = null

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 500) {
        setDirection("column")
      }
    }
  }, [])

  const updateSearch = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  useEffect(() => {
    clearTimeout(timeout)
    timeout = setTimeout(function() {
      setFilteredList(
        list.filter(movie => {
          if (typeof movie.title !== "undefined") {
            return movie.title.toLowerCase().includes(search.toLowerCase())
          }
          if (typeof movie.name !== "undefined") {
            return movie.name.toLowerCase().includes(search.toLowerCase())
          }
        })
      )
    }, 100)
  }, [search])

  return (
    <Layout>
      <SEO title={title} />
      <Flex direction={direction} justify="space-between">
        <SiteTitle>{heading}</SiteTitle>
        <SearchBar
          type="text"
          placeholder="Search..."
          value={search}
          onChange={updateSearch}
          direction={direction}
        />
      </Flex>
      <Grid
        rowGap="40px"
        maxWidth="100%"
        tablet={{
          columns: "50% 48%",
          columnGap: "2%",
        }}
      >
        {filteredList.map((movie, index) => {
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
