import { FaFilm, FaTv, FaBookOpen, FaQuestionCircle } from "react-icons/fa"
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
const ABOUT = {
  name: "About",
  path: "/about",
  Icon: FaQuestionCircle,
}

export const mainNavigationItems = [NEWS, MOVIES, TV_SHOWS, ABOUT]
