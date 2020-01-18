import { FaFilm, FaTv, FaBookOpen, FaPen } from "react-icons/fa"
const MOVIES = {
  name: "Movies",
  path: "/movies",
  Icon: FaFilm,
}

const TV_SHOWS = {
  name: "TV Shows",
  path: "/tv_shows",
  Icon: FaTv,
}

const NEWS = {
  name: "News",
  path: "/news",
  default: true,
  Icon: FaBookOpen,
}
const EDITORS_BLOG = {
  name: "Editor's Blog",
  path: "/editors_blog",
  Icon: FaPen,
}

export const mainNavigationItems = [NEWS, MOVIES, TV_SHOWS, EDITORS_BLOG]
