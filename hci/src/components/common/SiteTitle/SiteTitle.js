import styled from "styled-components"

const SiteTitle = styled.h1`
  font-size: calc(1.5vw + 18px);
  margin-bottom: 20px;
  a {
    border-bottom: 3px solid ${({ theme }) => theme.orbit.paletteProductNormal};
  }
  @media screen and (max-width: 1000px) {
    margin-top: 3px;
  }
  @media screen and (max-width: 370px) {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
  }
`

export default SiteTitle
