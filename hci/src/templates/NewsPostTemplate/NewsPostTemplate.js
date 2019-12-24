import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout.js"
import Post from "./components/Post"

const NewsPostTemplate = ({ data: { post } }) => {
  console.log(post)

  return (
    <Layout>
      <Post post={post} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
      }
    }
  }
`
export default NewsPostTemplate
