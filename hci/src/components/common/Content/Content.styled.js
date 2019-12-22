import styled from "styled-components"

export const ContentContainer = styled.div`
  flex: 1;
  position: relative;
  padding-right: 24px;
  margin: 80px auto 0 auto;
  max-width: 90%;
  padding-left: ${({ theme }) => theme.orbit.spaceXXLarge};
  background-color: ${({ theme }) => theme.orbit.palleteCloudLight};
`

export const ChildrenContainer = styled.div``