import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
  transition: 0.5s all;
  :hover {
    color: gray;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`
export const Image = styled.img`
  ${({ row }) =>
    row &&
    css`
      height: 20em;
    `}
`
export const Container = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 25px;
  border: ${({ theme }) =>
    `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`};
  h4 {
    margin-top: 10px;
    margin-bottom: 0;
  }
`
export const Title = styled.h1`
  margin-bottom: 0px;
`
export const ReleaseDate = styled.p`
  color: hsl(0, 0%, 45%);
  font-weight: 600;
  margin-bottom: 0px;
`
export const MovieDescription = styled.div`
  margin-left: 20px;
`
export const Overview = styled.div`
  margin-top: 15px;
`
export const Tags = styled.div`
  display: flex;
`
export const Tag = styled.span`
  :not(:last-of-type) {
    margin-right: 7px;
  }
`
export const FindOutMore = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  transition: 0.2s all;
  :hover {
    color: gray;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`
export const Border = styled.div`
  ::after {
    display: block;
    content: "";
    height: 1px;
    border-bottom: 1px solid #dadce0;
    margin-bottom: 20px;
  }
`
export const FeaturedCrewContainer = styled.div`
  margin-left: 20px;
`
export const FeaturedCrewGrid = styled.div`
  display: grid;
  margin-top: 0px;
`
export const CrewMember = styled.div`
  margin-right: 0px;
  a {
    color: ${({ theme }) => theme.orbit.paletteProductNormal};
    text-decoration: none;
    transition: 0.2s all;
    :hover {
      color: gray;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
`
