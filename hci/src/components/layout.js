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
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 90, maxHeight: 90) {
            ...GatsbyImageSharpFluid
          }
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
            <Navigation location={location} logo={data.logoImage.sharp.fluid} />
            <Content>
              <main>{children}</main>
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
