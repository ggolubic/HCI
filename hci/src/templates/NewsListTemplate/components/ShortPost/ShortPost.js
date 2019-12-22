import React from "react"

import {
  ShortPostContainer,
  PostTitleLink,
  PostTitle,
  PostTimeStamp,
} from "./ShortPost.styled"

const ShortPost = ({ title, date, slug, excerpt }) => {
  return (
    <ShortPostContainer>
      <PostTitleLink to={`/news/${slug}`}>
        <PostTitle>{title}</PostTitle>
      </PostTitleLink>
      <PostTimeStamp>{date}</PostTimeStamp>
      <p>{excerpt}</p>
    </ShortPostContainer>
  )
}

export default ShortPost
