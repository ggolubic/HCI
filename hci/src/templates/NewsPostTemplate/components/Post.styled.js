import styled from "styled-components"
import { Link } from "gatsby"

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
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
  margin-bottom: 25px;
`
export const PostTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 1.4em;
`
export const PostDescription = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-bottom: 0px;
  border-bottom: 1px solid #dadce0;
  font-size: 0.9em;
  @media screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`
export const PostAuthor = styled.a`
  text-decoration: none;
  font-weight: 600;
  padding-left: 2px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
  transition: 0.5s all;
  :hover {
    color: gray;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`
export const DescriptionSplitter = styled.p`
  color: hsl(0, 0%, 60%);
  font-weight: 1000;
  margin: 0px 4px 10px 4px;
`
export const PostDate = styled.p`
  color: hsl(0, 0%, 60%);
  font-weight: 600;
  margin-bottom: 0px;
`
export const Body = styled.div`
  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 2px;
    margin-top: 20px;
  }
`
