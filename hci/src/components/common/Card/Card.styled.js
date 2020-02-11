import styled from "styled-components"
import { Link } from "gatsby"

export const Image = styled.img`
  height: 250px;
  margin: 0 !important;

  @media screen and (max-width: 414px) {
    height: 200px;
  }
  @media screen and (max-width: 385px) {
    height: 170px;
    width: 40%;
  }
`
export const Title = styled.h3`
  margin: 8px 5px 5px 15px;
  font-size: 1.1em;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
  @media screen and (max-width: 385px) {
    font-size: 0.9em;
    margin-left: 2px;
  }
`

export const Container = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.5s all;
  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }
`

export const Description = styled.div`
  height: 250px;

  @media screen and (max-width: 414px) {
    height: 200px;
  }
  @media screen and (max-width: 385px) {
    height: 170px;
  }
`
export const ReleaseDate = styled.span`
  color: #4d4d4d;
  line-height: 1em;
  font-size: 0.9em;
  margin-left: 15px;
  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }
  @media screen and (max-width: 385px) {
    font-size: 0.7em;
    margin-left: 2px;
  }
`

export const Overview = styled.p`
  margin-top: 20px;
  word-wrap: break-word;
  white-space: normal;
  font-size: 0.8em;
  line-height: 1.4;
  width: 80%;
  margin: 20px auto;
  height: 150px;
  color: #4d4d4d;
  @media screen and (max-width: 411px) {
    margin-top: 8px;
    font-size: 0.7em;
    line-height: 1.2;
  }
`
export const MovieLink = styled(Link)`
  color: black;
  text-decoration: none;
`
