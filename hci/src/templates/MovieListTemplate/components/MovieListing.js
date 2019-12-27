import React, { useMemo } from "react"
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
} from "./MovieListing.styled"

const MovieListing = ({ title, poster, overview, date, id }) => {
  const formattedDate = format(new Date(date), "MMMM dd yyyy")

  const shortOverview = useMemo(() => {
    if (window.innerWidth > 768) {
      return `${overview.slice(0, 150)}...`
    } else {
      return `${overview.slice(0, 90)}...`
    }
  }, [window.innerWidth])

  return (
    <Container>
      <MovieLink to={`/movies/${id}`}>
        <Stack direction="row" flex="true">
          <Image src={`https://image.tmdb.org/t/p/w342${poster}`} />
          <Description>
            <Title>{title}</Title>
            <ReleaseDate>{formattedDate}</ReleaseDate>
            <Overview>{shortOverview}</Overview>
          </Description>
        </Stack>
      </MovieLink>
    </Container>
  )
}

export default MovieListing
