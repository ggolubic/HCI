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
  @media screen and (max-width: 369px) {
    margin: 20px auto 0 0;
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
export const PostDescription = styled.div`
  display: flex;
  margin-top: 0px;
`
export const PostAuthor = styled.p`
  font-size: 0.8em;
  font-weight: 1000;
  color: hsl(0, 0%, 60%);
  margin-bottom: 0px;
`
export const DescriptionSplitter = styled.p`
  color: hsl(0, 0%, 60%);
  font-size: 0.8em;
  font-weight: 1000;
  margin: 0px 4px 5px 4px;
`
export const PostTimeStamp = styled.p`
  color: hsl(0, 0%, 60%);
  font-weight: 1000;
  font-size: 0.8em;
  margin-bottom: 0px;
`
export const PostExcerpt = styled.p`
  font-size: 0.8em;
  margin-bottom: 0px;
  margin-top: 0px;
`
