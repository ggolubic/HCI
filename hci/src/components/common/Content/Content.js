import React from "react"
import { ContentContainer, ChildrenContainer } from "./Content.styled"

const Content = ({ children }) => {
  return (
    <ContentContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ContentContainer>
  )
}
export default Content
