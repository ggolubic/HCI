import React from "react"
import { format } from "date-fns"
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars"

import Flex from "common/Flex/Flex"
import {
  Container,
  TitleAndYear,
  MovieDescription,
  Overview,
  Tags,
  Tag,
  FeaturedCrew,
  CrewMember,
  CrewMemberName,
  FindOutMore,
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
  const featuredWriter = crew.find(person => person.job === "Writer")
  const featuredProducer = crew.find(
    person => person.job === "Executive Producer"
  )
  return (
    <Container>
      <Flex direction={window.innerWidth < 800 ? "column" : "row"}>
        <img
          src={
            window.innerWidth < 800
              ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
              : `https://image.tmdb.org/t/p/w300${poster_path}`
          }
          alt="Banner"
        />
        <MovieDescription>
          <TitleAndYear>
            {title}
            <span>{`(${format(new Date(release_date), "yyyy")})`}</span>
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
          <h4>Featured Crew</h4>
          <FeaturedCrew>
            <CrewMember>
              <CrewMemberName>{featuredProducer.name}</CrewMemberName>
              <span>{featuredProducer.job}</span>
            </CrewMember>
            {featuredWriter && (
              <CrewMember>
                <CrewMemberName>{featuredWriter.name}</CrewMemberName>
                <span>{featuredWriter.job}</span>
              </CrewMember>
            )}
          </FeaturedCrew>
          <FindOutMore
            href={`https://www.imdb.com/title/${imdb_id}`}
            target="_blank"
          >
            Find out more
          </FindOutMore>
        </MovieDescription>
      </Flex>
    </Container>
  )
}

export default Movie
