import styled from "styled-components"

const SiteTitle = styled.h1`
  font-size: calc(1.5vw + 13px);
  margin-bottom: 0px;
  position: relative;
  top: -6px;
  a {
    border-bottom: 3px solid ${({ theme }) => theme.orbit.paletteProductNormal};
  }
  @media screen and (max-width: 1279px) {
    font-size: calc(1.5vw + 18px);
    top: -4px;
  }
  @media screen and (max-width: 369px) {
    margin: 0px auto 0px auto;
  }
`

export default SiteTitle
