import styled from "styled-components"

export const ContentContainer = styled.div`
  flex: 1;
  position: relative;
  margin: 20px 40px 10px 90px;
  padding-left: 30px;
  max-width: 95%;
  background-color: ${({ theme }) => theme.orbit.palleteCloudLight};
  @media screen and (max-width: 1280px) {
    margin: 20px 25px 10px 90px;
    padding-left: 0px;
  }
`

export const ChildrenContainer = styled.div``
