import React from "react"
import styled from "styled-components"

const Flex = ({ direction, justify, children }) => {
  return (
    <Flexbox direction={direction} justify={justify}>
      {children}
    </Flexbox>
  )
}

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
`

export default Flex
