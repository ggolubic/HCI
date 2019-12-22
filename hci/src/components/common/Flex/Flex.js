import React from "react"
import styled from "styled-components"

const Flex = ({ direction, children }) => {
  return <Flexbox direction={direction}>{children}</Flexbox>
}

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`

export default Flex
