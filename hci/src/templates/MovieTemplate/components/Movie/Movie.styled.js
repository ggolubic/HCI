import styled from "styled-components"
import { Link } from "gatsby"

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
`

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
`
export const TitleAndYear = styled.span`
  font-size: 30px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
  span {
    margin-left: 5px;
    opacity: 0.6;
    font-weight: 400;
  }
  @media screen and (max-width: 375px) {
    font-size: 25px;
    span {
      font-size: 20px;
    }
  }
`
export const MovieDescription = styled.div`
  margin-left: 20px;
`

export const Overview = styled.div`
  margin-top: 20px;
  h4 {
    margin-bottom: 10px;
  }
`
export const Tags = styled.div`
  margin-top: 8px;
  display: flex;
`

export const Tag = styled.span`
  opacity: 0.8;
  :not(:last-of-type) {
    margin-right: 5px;
  }
`

export const FeaturedCrew = styled.div`
  display: flex;
  margin-top: 20px;
`
export const CrewMember = styled.div`
  margin-right: 20px;
  span {
    font-family: Roboto;
    opacity: 0.8;
    margin-top: 5px;
    font-weight: 400;
  }
`
export const CrewMemberName = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  @media screen and (max-width: 375px) {
    font-size: 16px;
  }
`

export const FindOutMore = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  :hover {
    color: ${({ theme }) => theme.orbit.paletteProductNormal};
    transition: 0.2s all;
  }
  @media screen and (max-width: 375px) {
    font-size: 16px;
  }
`
