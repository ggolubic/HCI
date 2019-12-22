import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout.js"
import ShortPost from "./components/ShortPost/ShortPost.js"
import Pagination from "./components/Pagination/Pagination.js"

const NewsList = ({ data, pageContext }) => {
  return (
    <Layout>
      <h1>Headlines</h1>
      {data.allMdx.nodes.map(
        ({ excerpt, frontmatter: { slug, title, date } }) => (
          <ShortPost title={title} slug={slug} date={date} excerpt={excerpt} />
        )
      )}
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY($limit: Int!, $skip: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
          slug
        }
      }
    }
  }
`

export default NewsList
