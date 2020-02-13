import React, { useState, useEffect } from "react"
import { format } from "date-fns"
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars"
import ArrowLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"

import Flex from "common/Flex/Flex"
import {
  Container,
  Image,
  Title,
  ReleaseDate,
  MovieDescription,
  Overview,
  Tags,
  Tag,
  Border,
  FeaturedCrewContainer,
  FeaturedCrewGrid,
  CrewMember,
  FindOutMore,
  BackLink,
} from "./Movie.styled"

const Movie = ({
  movie: {
    title,
    poster_path,
    vote_average,
    overview,
    release_date,
    genres,
    backdrop_path,
    imdb_id,
    credits: { crew },
  },
}) => {
  const [direction, setDirection] = useState("row")
  const [src, setSrc] = useState(
    `https://image.tmdb.org/t/p/w300${poster_path}`
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 800) {
        setDirection("column")
        setSrc(`https://image.tmdb.org/t/p/w780${backdrop_path}`)
      }
    }
  }, [])

  const featuredWriter = crew.find(person => person.job === "Writer")
  const featuredProducer = crew.find(
    person => person.job === "Executive Producer"
  )

  return (
    <>
      <BackLink to="/movies">
        <ArrowLeft /> Back to Movies
      </BackLink>
      <Container>
        <Flex direction={direction}>
          <Image src={src} alt="Banner" row={direction === "row"} />
          <MovieDescription>
            <Title>{title}</Title>
            <ReleaseDate>{`${format(
              new Date(release_date),
              "MMMM dd, yyyy"
            )}`}</ReleaseDate>
            <RatingStars
              rating={vote_average / 2}
              size="small"
              color="secondary"
              showEmpty
            />
            <h4>Genre</h4>
            <Tags>
              {genres.slice(0, 3).map((genre, index) => (
                <Tag key={index}>{genre.name}</Tag>
              ))}
            </Tags>
            <Overview>
              <h4>Overview</h4>
              <p>{overview}</p>
            </Overview>
            <FindOutMore
              href={`https://www.imdb.com/title/${imdb_id}`}
              target="_blank"
            >
              Find out more on IMDb
            </FindOutMore>
          </MovieDescription>
        </Flex>
        <Border />
        {featuredProducer || featuredWriter ? (
          <FeaturedCrewContainer>
            <h4>Featured crew</h4>
            <FeaturedCrewGrid>
              {featuredProducer && (
                <CrewMember>
                  <a
                    href={`http://www.google.com/search?q=${featuredProducer.name
                      .split(" ")
                      .join("+")}`}
                    target="_blank"
                  >
                    {featuredProducer.name}
                  </a>
                  {featuredProducer.job && ` (${featuredProducer.job})`}
                </CrewMember>
              )}
              {featuredWriter && (
                <CrewMember>
                  <a
                    href={`http://www.google.com/search?q=${featuredWriter.name
                      .split(" ")
                      .join("+")}`}
                    target="_blank"
                  >
                    {featuredWriter.name}
                  </a>
                  {featuredWriter.job && ` (${featuredWriter.job})`}
                </CrewMember>
              )}
            </FeaturedCrewGrid>
          </FeaturedCrewContainer>
        ) : (
          ""
        )}
      </Container>
    </>
  )
}

export default Movie
