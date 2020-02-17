import React from "react"

import {
  ShortPostContainer,
  PostLink,
  PostTitle,
  PostAuthor,
  DescriptionSplitter,
  PostTimeStamp,
  PostDescription,
  PostExcerpt,
} from "./ShortPost.styled"

const ShortPost = ({ title, date, slug, excerpt, author }) => {
  return (
    <PostLink to={`/news/${slug}`}>
      <ShortPostContainer>
        <PostTitle>{title}</PostTitle>
        <PostDescription>
          <PostAuthor>{author}</PostAuthor>
          <DescriptionSplitter>|</DescriptionSplitter>
          <PostTimeStamp>{date}</PostTimeStamp>
        </PostDescription>
        <PostExcerpt>{excerpt}</PostExcerpt>
      </ShortPostContainer>
    </PostLink>
  )
}

export default ShortPost
