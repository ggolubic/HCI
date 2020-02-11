import React from "react"

import {
  ShortPostContainer,
  PostTitleLink,
  PostTitle,
  PostTimeStamp,
  PostAuthor,
  PostDescription,
} from "./ShortPost.styled"

const ShortPost = ({ title, date, slug, excerpt, author }) => {
  return (
    <ShortPostContainer>
      <PostTitleLink to={`/news/${slug}`}>
        <PostTitle>{title}</PostTitle>
      </PostTitleLink>
      <PostDescription>
        <PostAuthor>{author}</PostAuthor>
        <PostTimeStamp>, {date}</PostTimeStamp>
      </PostDescription>
      <p>{excerpt}</p>
    </ShortPostContainer>
  )
}

export default ShortPost
