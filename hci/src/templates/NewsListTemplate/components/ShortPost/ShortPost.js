import React from "react"

import {
  ShortPostContainer,
  PostLink,
  PostTitle,
  PostTimeStamp,
  PostAuthor,
  PostDescription,
} from "./ShortPost.styled"

const ShortPost = ({ title, date, slug, excerpt, author }) => {
  return (
    <PostLink to={`/news/${slug}`}>
      <ShortPostContainer>
        <PostTitle>{title}</PostTitle>
        <PostDescription>
          <PostAuthor>{author}</PostAuthor>
          <PostTimeStamp>, {date}</PostTimeStamp>
        </PostDescription>
        <p>{excerpt}</p>
      </ShortPostContainer>
    </PostLink>
  )
}

export default ShortPost
