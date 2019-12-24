const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/news",
    toPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
  })
  const blogList = path.resolve(
    `src/templates/NewsListTemplate/NewsListTemplate.js`
  )
  const blogPost = path.resolve(
    `src/templates/NewsPostTemplate/NewsPostTemplate.js`
  )
  // blog post
  const {
    data: {
      allMdx: { posts },
    },
  } = await graphql(`
    query BlogPages {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "//content/news//" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        posts: edges {
          post: node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)

  // Create blog post list pages
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/news/${index + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
        pagePath: "news",
      },
    })
  })

  // Create blog post pages
  posts.forEach(({ post }, index) => {
    const { slug } = post.frontmatter
    const previous = index === 0 ? null : posts[index - 1].post
    const next = index === posts.length - 1 ? null : posts[index + 1].post

    createPage({
      path: `/news/${slug}`,
      component: blogPost,
      context: {
        slug,
        previous,
        next,
      },
    })
  })
}
