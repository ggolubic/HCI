import React from "react"
import { Logo, LogoContainer, LogoText } from "./Logo.styled"

const MTNLogo = ({ open, src }) => {
  return (
    <LogoContainer>
      <Logo fluid={src} alt="Logo" open={open} />
      <LogoText open={open}>MTN</LogoText>
    </LogoContainer>
  )
}

export default MTNLogo
