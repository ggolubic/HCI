import styled from "styled-components"
import Img from "gatsby-image"

export const PostContainer = styled.div`
  background: #fff;
  padding: 20px;
  border: ${({ theme }) =>
    `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`};
  margin-bottom: 30px;
  margin-top: 15px;
`
export const Image = styled(Img)`
  margin: 5px auto 5px auto;
  width: 20vw;
`
export const Body = styled.div`
  font-size: 1.8vh;
  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 2px;
    margin-top: 20px;
  }
  h1,
  h2 {
    font-size: 1.5em;
  }
  h4 {
    color: hsl(0, 0%, 45%);
  }
  @media screen and (max-height: 768px) {
    font-size: 2vh;
  }
`
