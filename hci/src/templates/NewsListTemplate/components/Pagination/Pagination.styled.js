import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const ItemLink = styled(Link)`
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-decoration: none;
  display: flex;
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      color: ${({ theme }) => theme.orbit.paletteInkLight};
    `}

  :hover {
    color: ${({ theme }) => theme.orbit.paletteProductNormal};
    transition: 0.3s all;
  }
`
export const NumContainer = styled.div`
  padding: 5px;
  text-align: center;
  width: 35px;
  border-radius: 3px;
  border: 1px solid gray;
  margin-left: 5px;
  background: #fff;
  :hover {
    background: #fbfbfb;
    transition: 0.5s all;
  }
`

export const PageChange = styled.span`
  padding: 5px;
  font-size: calc(1.2vw + 10px);
  @media screen and (max-width: 465px) {
    span {
      display: none;
    }
    font-size: 20px;
  }
`
export const PaginationContainer = styled.div`
  margin: 30px auto;
`
