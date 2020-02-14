import React from "react"
import Layout from "components/layout.js"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "components/seo.js"
import SiteTitle from "common/SiteTitle/SiteTitle"
import { graphql, useStaticQuery } from "gatsby"
import { PostContainer, Body } from "./About.styled"

const AboutTemplate = ({ pageContext: { heading, title } }) => {
  const data = useStaticQuery(graphql`
    query {
      post: mdx(frontmatter: { slug: { eq: "about" } }) {
        body
        frontmatter {
          slug
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={title} />
      <SiteTitle>{heading}</SiteTitle>
      <PostContainer>
        <Body>
          <MDXRenderer>{data.post.body}</MDXRenderer>
        </Body>
      </PostContainer>
    </Layout>
  )
}

export default AboutTemplate
