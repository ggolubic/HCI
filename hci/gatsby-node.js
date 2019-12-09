const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const newsList = path.resolve(`./src/templates/NewsListTemplate.js`)
  console.log(newsList)
  // blog post
  const {
    data: {
      allMdx: { posts },
    },
  } = await graphql(`
    query NewsPages {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "//content/news//" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        posts: edges {
          post: node {
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  console.log(posts)
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/news` : `/news/${index + 1}`,
      component: newsList,
      context: {
        // additional data can be passed via context;
        // this will be used in the GraphQL query as
        // an query variable
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
