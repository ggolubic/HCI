import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import theme from "../styles/theme"
import GlobalStyle from "../styles/globalstyles"

import "./layout.css"
import Navigation from "./common/Navigation/Navigation"
import Content from "./common/Content/Content"
import Flex from "./common/Flex/Flex"

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
      <GlobalStyle />
      <Location>
        {({ location }) => (
          <Flex style={{ height: "100vh" }}>
            <Navigation location={location} />
            <Content>
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </Content>
          </Flex>
        )}
      </Location>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
