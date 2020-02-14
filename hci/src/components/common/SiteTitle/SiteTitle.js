import styled from "styled-components"

const SiteTitle = styled.h1`
  font-size: calc(1.5vw + 18px);
  margin-bottom: 10px;
  @media screen and (max-width: 1000px) {
    font-size: calc(1.5vw + 20px);
  }
  @media screen and (max-width: 370px) {
    margin-right: auto;
    margin-left: auto;
  }
`

export default SiteTitle
