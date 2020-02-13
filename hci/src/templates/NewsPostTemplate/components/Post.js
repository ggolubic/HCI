import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ArrowLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"

import {
  PostContainer,
  PostTitle,
  PostDescription,
  PostAuthor,
  PostDate,
  BackLink,
  Body,
} from "./Post.styled"

const Post = ({ post: { body, frontmatter } }) => {
  const authorSearch = `http://www.google.com/search?q=${frontmatter.author
    .split(" ")
    .join("+")}`

  return (
    <>
      <BackLink to="/">
        <ArrowLeft /> Back to News
      </BackLink>
      <PostContainer>
        <PostTitle>{frontmatter.title}</PostTitle>
        <PostDescription>
          <PostAuthor href={authorSearch} target="_blank">
            {frontmatter.author}
          </PostAuthor>
          <PostDate>{frontmatter.date}</PostDate>
        </PostDescription>
        <Body>
          <MDXRenderer>{body}</MDXRenderer>
        </Body>
      </PostContainer>
    </>
  )
}
export default Post
