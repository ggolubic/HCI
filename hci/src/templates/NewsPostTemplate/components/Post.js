import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  PostContainer,
  PostTitle,
  PostDescription,
  PostAuthor,
  PostDate,
} from "./Post.styled"

const Post = ({ post: { body, frontmatter } }) => {
  return (
    <PostContainer>
      <PostTitle>{frontmatter.title}</PostTitle>
      <PostDescription>
        <PostAuthor>{frontmatter.author}</PostAuthor>
        <PostDate>{frontmatter.date}</PostDate>
      </PostDescription>
      <MDXRenderer>{body}</MDXRenderer>
    </PostContainer>
  )
}
export default Post
