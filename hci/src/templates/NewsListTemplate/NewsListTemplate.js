import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout.js"
import SEO from "components/seo.js"
import ShortPost from "./components/ShortPost/ShortPost.js"
import Pagination from "./components/Pagination/Pagination.js"
import SiteTitle from "common/SiteTitle/SiteTitle"

const NewsList = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="News" />

      <SiteTitle>Headlines</SiteTitle>
      {data.allMdx.nodes.map(
        ({ excerpt, frontmatter: { slug, title, date, author } }) => (
          <ShortPost
            title={title}
            slug={slug}
            date={date}
            excerpt={excerpt}
            author={author}
            key={slug}
          />
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
          date(formatString: "MMMM DD, YYYY")
          slug
          author
        }
      }
    }
  }
`

export default NewsList
