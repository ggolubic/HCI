import React, { useState, useEffect } from "react"
import { format } from "date-fns"
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars"
import ArrowLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"

import Flex from "common/Flex/Flex"
import {
  Container,
  TitleAndYear,
  MovieDescription,
  Overview,
  Tags,
  Tag,
  FeaturedCast,
  CastMember,
  CastMemberName,
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
          <img src={src} alt="Banner" />
          <MovieDescription>
            <TitleAndYear>
              {name}
              <span>{`(${format(new Date(first_air_date), "yyyy")})`}</span>
            </TitleAndYear>
            <RatingStars
              rating={vote_average / 2}
              size="small"
              color="primary"
              showEmpty
            />
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
        <h4>Featured Cast</h4>
        <FeaturedCast>
          {featuredCast.map(person => (
            <CastMember>
              <CastMemberName>{person.name}</CastMemberName>
              <span>{person.character}</span>
            </CastMember>
          ))}
        </FeaturedCast>
      </Container>
    </>
  )
}

export default TvShow
