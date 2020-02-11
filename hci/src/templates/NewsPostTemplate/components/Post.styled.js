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
export const PostAuthor = styled.h3`
  font-size: 15px;
`
export const PostDate = styled.h3`
  font-size: 15px;
  color: hsl(0, 0%, 45%);
  margin-left: 10px;
`
