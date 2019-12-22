import React from "react"
import { graphql } from "gatsby"

const NewsPostTemplate = ({ data }) => <div>{data}</div>

export const query = graphql`
  query BlogPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      body
    }
  }
`
export default NewsPostTemplate
