import React, { useState, useEffect } from "react"
import { format } from "date-fns"
import Stack from "@kiwicom/orbit-components/lib/Stack"

import {
  Container,
  Image,
  Title,
  Description,
  Overview,
  ReleaseDate,
  MovieLink,
} from "./Card.styled"

const Card = ({ title, poster, overview, date, path, id }) => {
  const formattedDate = format(new Date(date), "MMMM dd, yyyy")
  const [shortTitle, setShortTitle] = useState(title)
  const [shortOverview, setShortOverview] = useState(
    `${overview.slice(0, 150)}...`
  )
  useEffect(() => {
    if (window !== "undefined") {
      if (window.innerWidth === 768 || window.innerWidth === 320) {
        setShortOverview(`${overview.slice(0, 90)}...`)
      } else {
        setShortOverview(`${overview.slice(0, 150)}...`)
      }
    }
    if (title.length > 30) {
      setShortTitle(`${title.slice(0, 30)}...`)
      setShortOverview(`${overview.slice(0, 110)}...`)
    }
    if (title.length > 18 || formattedDate.length > 15) {
      setShortOverview(`${overview.slice(0, 100)}...`)
    }
  }, [])

  return (
    <Container>
      <MovieLink to={`/${path}/${id}`}>
        <Stack direction="row" flex="true">
          <Image
            src={`https://image.tmdb.org/t/p/w342${poster}`}
            alt="Poster for show"
          />
          <Description>
            <Title>{shortTitle}</Title>
            <ReleaseDate>{formattedDate}</ReleaseDate>
            <Overview>{shortOverview}</Overview>
          </Description>
        </Stack>
      </MovieLink>
    </Container>
  )
}

export default Card
