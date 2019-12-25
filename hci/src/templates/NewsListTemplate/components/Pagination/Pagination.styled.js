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

export const PaginationContainer = styled.div`
  margin: 30px auto;
`
