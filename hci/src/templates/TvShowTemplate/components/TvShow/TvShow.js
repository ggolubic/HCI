import React, { useState, useEffect } from "react"
import { format } from "date-fns"
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars"
import ArrowLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"

import Flex from "common/Flex/Flex"
import {
  Container,
  Title,
  ReleaseDate,
  Image,
  MovieDescription,
  Overview,
  Tags,
  Tag,
  FeaturedCast,
  FeaturedCastGrid,
  CastMember,
  FindOutMore,
  Border,
  BackLink,
} from "./TvShow.styled"

const TvShow = ({
  show: {
    name,
    poster_path,
    vote_average,
    overview,
    first_air_date,
    genres,
    backdrop_path,
    credits: { cast },
    external_ids: { imdb_id },
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
  const featuredCast = cast.slice(0, 5)

  return (
    <>
      <BackLink to="/tv_shows">
        <ArrowLeft /> Back to TV Shows
      </BackLink>
      <Container>
        <Flex direction={direction}>
          <Image src={src} alt="Banner" row={direction === "row"} />
          <MovieDescription>
            <Title>{name}</Title>
            <ReleaseDate>{`${format(
              new Date(first_air_date),
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
              {genres.map((genre, index) => (
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
              Find out more
            </FindOutMore>
          </MovieDescription>
        </Flex>
        <Border />
        <FeaturedCast>
          <h4>Featured cast</h4>
          <FeaturedCastGrid>
            {featuredCast.map(person => (
              <CastMember>
                <a
                  href={`http://www.google.com/search?q=${person.name
                    .split(" ")
                    .join("+")}`}
                >
                  {person.name}
                </a>{" "}
                {person.character && `as ${person.character}`}
              </CastMember>
            ))}
          </FeaturedCastGrid>
        </FeaturedCast>
      </Container>
    </>
  )
}

export default TvShow
