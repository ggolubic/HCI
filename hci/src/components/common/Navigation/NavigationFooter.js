import React from "react"

import { Footer, VisitContainer, VisitItem } from "./Navigation.styled"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa"

const NavigationFooter = () => {
  return (
    <Footer>
      <p>© 2020 N&G</p>
      <VisitContainer>
        <VisitItem href="https://www.facebook.com/" target="_blank">
          <FaFacebookSquare />
        </VisitItem>
        <VisitItem href="https://twitter.com/?lang=en" target="_blank">
          <FaTwitterSquare />
        </VisitItem>
        <VisitItem href="https://www.youtube.com/" target="_blank">
          <FaYoutubeSquare />
        </VisitItem>
        <VisitItem href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin />
        </VisitItem>
      </VisitContainer>
    </Footer>
  )
}

export default NavigationFooter
