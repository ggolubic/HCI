import React from "react"
import Layout from "components/layout.js"
import SEO from "components/seo.js"
import SiteTitle from "common/SiteTitle/SiteTitle"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, useStaticQuery } from "gatsby"
import { PostContainer, Image, Body } from "./About.styled"

const AboutTemplate = ({ pageContext: { heading, title } }) => {
  const data = useStaticQuery(graphql`
    query {
      post: mdx(frontmatter: { slug: { eq: "about-page" } }) {
        body
        frontmatter {
          slug
          title
        }
      }
      aboutImage: file(relativePath: { eq: "mtnAbout.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600, maxHeight: 524) {
            ...GatsbyImageSharpFluid
          }
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
          <Image fluid={data.aboutImage.sharp.fluid} alt="about" />
          <MDXRenderer>{data.post.body}</MDXRenderer>
        </Body>
      </PostContainer>
    </Layout>
  )
}

export default AboutTemplate
