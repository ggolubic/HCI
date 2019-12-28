import React from "react"
import { LargeLogo, SmallLogo, LogoContainer, LogoText } from "./Logo.styled"

const MTNLogo = ({ open, src }) => {
  return open ? (
    <LogoContainer>
      <LargeLogo fluid={src} alt="Logo" />
      <LogoText>MTN</LogoText>
    </LogoContainer>
  ) : (
    <LogoContainer>
      <SmallLogo fluid={src} alt="Logo" />
    </LogoContainer>
  )
}

export default MTNLogo
