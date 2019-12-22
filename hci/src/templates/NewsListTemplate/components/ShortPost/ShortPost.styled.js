import styled from "styled-components"
import { Link } from "gatsby"

export const ShortPostContainer = styled.div`
  margin: 20px auto;
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 1px -1px gray;
  :hover {
    box-shadow: 0 5px 3px -3px gray;
    transition: 0.5s all;
  }
`
export const PostTitleLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export const PostTitle = styled.h2`
  margin-bottom: 0px;
`

export const PostTimeStamp = styled.span`
  display: inline-block;
  color: hsl(0, 0%, 45%);
  font-size: 15px;
  margin-bottom: 15px;
  :after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    width: 80%; /* Change this to whatever width you want. */
    border-bottom: 2px solid black; /* This creates the border. Replace black with whatever color you want. */
  }
`
