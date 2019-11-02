import styled from "styled-components"

export const ContentContainer = styled.div`
  flex: 1;
  padding-right: 24px;
  margin: 0 auto;
  margin-left: ${({ theme }) => theme.sizes.navigationExpandedWidth}px;
  padding-left: ${({ theme }) => theme.orbit.spaceXXLarge};
`

export const ChildrenContainer = styled.div``
