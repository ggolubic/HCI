import React from "react"
import Logo from "../../../images/logo.png"
import { LargeLogo, SmallLogo, LogoContainer, LogoText } from "./Logo.styled"

const MTNLogo = ({ open }) => {
  console.log(open)
  if (open) {
    return (
      <LogoContainer>
        <LargeLogo src={Logo} />
        <LogoText>MTN</LogoText>
      </LogoContainer>
    )
  } else {
    return (
      <LogoContainer>
        <SmallLogo src={Logo} />
      </LogoContainer>
    )
  }
}

export default MTNLogo
