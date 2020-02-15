import styled from "styled-components"

const SiteTitle = styled.h1`
  font-size: calc(1.5vw + 13px);
  margin-bottom: 20px;
  a {
    border-bottom: 3px solid ${({ theme }) => theme.orbit.paletteProductNormal};
  }
  @media screen and (max-width: 1000px) {
    font-size: calc(1.5vw + 18px);
  }
  @media screen and (max-width: 650px) {
    margin-top: 3px;
  }
  @media screen and (max-width: 370px) {
    margin: 0px auto 10px auto;
  }
`

export default SiteTitle
