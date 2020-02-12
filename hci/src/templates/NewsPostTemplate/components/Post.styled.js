import styled from "styled-components"
import { Link } from "gatsby"

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
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
  border: 1px solid #dadce0;
`
export const PostTitle = styled.h1`
  font-size: calc(1.52vw + 23px);
  margin-bottom: 10px;
`
export const PostDescription = styled.div`
  display: flex;
  margin-bottom: 15px;
`
export const PostAuthor = styled.a`
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
  transition: 0.5s all;
  :hover {
    color: gray;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`
export const PostDate = styled.p`
  font-size: 16px;
  color: hsl(0, 0%, 45%);
  font-weight: 600;
  margin-left: 15px;
`
export const Body = styled.div`
  img {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`
