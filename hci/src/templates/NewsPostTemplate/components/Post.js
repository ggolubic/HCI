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
} from "./Post.styled"

const Post = ({ post: { body, frontmatter } }) => {
  return (
    <>
      <BackLink to="/">
        <ArrowLeft /> Back to News
      </BackLink>
      <PostContainer>
        <PostTitle>{frontmatter.title}</PostTitle>
        <PostDescription>
          <PostAuthor>{frontmatter.author}</PostAuthor>
          <PostDate>{frontmatter.date}</PostDate>
        </PostDescription>
        <MDXRenderer>{body}</MDXRenderer>
      </PostContainer>
    </>
  )
}
export default Post
