import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import theme from "../styles/theme"

import Header from "./header"
import "./layout.css"
import Navigation from "./common/Navigation/Navigation"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Location>
        {({ location }) => (
          <>
            <Navigation location={location} />
            <Header siteTitle={data.site.siteMetadata.title} />

            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </>
        )}
      </Location>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
