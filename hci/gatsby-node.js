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
  const postsPerPage = 4
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
      list: aggregatedMovieList,
      title: "Movies",
      heading: "Top 20 Popular Movies",
      cardPath: "movies",
    },
  })

  //Fetch TV shows list
  const {
    data: { results: tvShowsList },
  } = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.GATSBY_TMDB_API_KEY}&language=en-US&page=1`
  )

  createPage({
    path: `/tv_shows`,
    component: path.resolve("src/templates/MovieListTemplate/index.js"),
    context: {
      list: tvShowsList,
      title: "TV Shows",
      heading: "Top 20 Popular TV Shows",
      cardPath: "tv_shows",
    },
  })

  //Fetch Tv show details
  tvShowsList.forEach(async show => {
    const showDetails = await axios.get(
      `https://api.themoviedb.org/3/tv/${show.id}?api_key=${process.env.GATSBY_TMDB_API_KEY}&language=en-US&append_to_response=credits,external_ids
        `
    )

    createPage({
      path: `/tv_shows/${showDetails.data.id}`,
      component: path.resolve("src/templates/TvShowTemplate/index.js"),
      context: {
        show: showDetails.data,
      },
    })
  })

  //Editors Blog
  createPage({
    path: `/editors_blog`,
    component: path.resolve("src/templates/EditorsBlogTemplate/index.js"),
    context: {
      list: tvShowsList,
      title: "Editor's Blog",
      heading: "Editor's Blog",
      cardPath: "editors_blog",
    },
  })
}
