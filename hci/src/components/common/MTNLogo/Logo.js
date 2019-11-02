import React from "react"
import Logo from "../../../images/logo.png"
import { LargeLogo, SmallLogo, LogoContainer, LogoText } from "./Logo.styled"

const MTNLogo = ({ open }) => {
  console.log(open)
  return open ? (
    <LogoContainer>
      <LargeLogo src={Logo} />
      <LogoText>MTN</LogoText>
    </LogoContainer>
  ) : (
    <LogoContainer>
      <SmallLogo src={Logo} />
    </LogoContainer>
  )
}

export default MTNLogo
