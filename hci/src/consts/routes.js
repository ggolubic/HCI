import { FaFilm, FaTv, FaNewspaper, FaClipboardCheck } from "react-icons/fa"
const MOVIES = {
  name: "Movies",
  path: "/",
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
  Icon: FaNewspaper,
}
const EDITORS_CHOICE = {
  name: "Editor's Choice",
  path: "/editors_choice",
  Icon: FaClipboardCheck,
}

export const mainNavigationItems = [MOVIES, TV_SHOWS, NEWS, EDITORS_CHOICE]
