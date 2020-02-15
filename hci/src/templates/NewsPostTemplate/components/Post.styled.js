import styled from "styled-components"
import { Link } from "gatsby"

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  font-size: 2.5vh;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
  transition: 0.5s all;
  :hover {
    color: gray;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`
export const PostContainer = styled.div`
  background: #fff;
  padding: 20px;
  border: ${({ theme }) =>
    `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`};
  margin-bottom: 30px;
`
export const PostTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 3vh;
`
export const PostDescription = styled.div`
  display: flex;
  margin-bottom: 0;
`
export const PostAuthor = styled.a`
  font-size: 1.9vh;
  text-decoration: none;
  font-weight: 600;
  padding-left: 2px;
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
  transition: 0.5s all;
  :hover {
    color: gray;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`
export const PostDate = styled.p`
  font-size: 1.9vh;
  color: hsl(0, 0%, 45%);
  font-weight: 600;
  margin-left: 15px;
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
  img {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    font-size: 2vh;
  }
`
