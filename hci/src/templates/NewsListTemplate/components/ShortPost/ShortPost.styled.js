import styled from "styled-components"
import { Link } from "gatsby"

export const ShortPostContainer = styled.div`
  margin: 0 auto 25px 0;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.5s all;
  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`
export const PostLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export const PostTitle = styled.h2`
  margin-bottom: 0px;
  font-size: 1.3em;
`

export const PostTimeStamp = styled.h3`
  display: inline-block;
  color: hsl(0, 0%, 45%);
  font-weight: 600;
  font-size: 0.8em;
  margin: 0 0 15px 15px;
`
export const PostAuthor = styled.h3`
  font-weight: 600;
  margin-bottom: 0;
  font-size: 0.8em;
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
`
export const PostDescription = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #dadce0;
`
export const PostExcerpt = styled.p`
  font-size: 0.8em;
  margin-bottom: 7px;
`
