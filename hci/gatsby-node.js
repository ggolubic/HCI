const path = require(`path`)
const dotenv = require("dotenv")
const axios = require("axios")

dotenv.config({ path: `.env.development` })

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

    createPage({
      path: `/news/${slug}`,
      component: blogPost,
      context: {
        slug,
      },
    })
  })

  //Fetch movie list
  const {
    data: { results: movieList },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.GATSBY_TMDB_API_KEY}&language=en-US&page=1`
  )

  //Fetch movie data
  const aggregatedMovieList = []
  movieList.forEach(async movie => {
    const movieDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.GATSBY_TMDB_API_KEY}&append_to_response=credits
        `
    )

    aggregatedMovieList.push(movieDetails.data)

    createPage({
      path: `/movies/${movieDetails.data.id}`,
      component: path.resolve("src/templates/MovieTemplate/index.js"),
      context: {
        movie: movieDetails.data,
      },
    })
  })

  createPage({
    path: `/movies`,
    component: path.resolve("src/templates/MovieListTemplate/index.js"),
    context: {
      movies: aggregatedMovieList,
    },
  })
}
