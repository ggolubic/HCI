import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const ItemLink = styled(Link)`
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-decoration: none;
  display: flex;
`
export const ItemDescription = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  width: ${({ theme }) => theme.sizes.navigationExpandedWidth}px;
  display: flex;
  transition: all 150ms ease-in-out;
`

export const ItemName = styled.span`
  padding-left: 10px;
  width: ${({ theme }) => theme.sizes.navigationExpandedWidth}px;
  ${({ open }) =>
    !open &&
    css`
      opacity: 0;
    `}
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 18px;
  padding-left: 16px;
  width: ${({ theme }) => theme.sizes.navigationExpandedWidth}px;
  height: 50px;
  border-left: 4px solid transparent;
  transition: all 150ms ease-in-out;
  color: transparent;
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
      border-color: ${({ theme }) => theme.orbit.paletteProductNormal};
    `}
`

export const NavigationControlContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3vh 0 10px;
  padding-top: 10px;
  width: 100%;
`

export const NavigationControlText = styled.span`
  white-space: nowrap;
  text-transform: uppercase;
`

export const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.navigationWidth}px;
  background-color: white;
  z-index: 5;
  transition: width 250ms ease-in-out;
  font-size: 12px;
  border-right: ${({ theme }) =>
    `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`};

  & + div {
    transition: all 250ms ease-in-out;
  }

  ${({ open }) =>
    open &&
    css`
      width: ${({ theme }) => theme.sizes.navigationExpandedWidth}px;
      transition: width 250ms ease-in-out;
      overflow: hidden;

      @media all and (min-width: 1280px) {
        & + div {
          margin-left: ${({ theme }) => theme.sizes.navigationExpandedWidth}px;
        }
      }
    `}
`
export const Footer = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 1em;
  left: 0;
  bottom: 0;
  width: ${({ theme }) => theme.sizes.navigationExpandedWidth}px;
  color: gray;
  text-align: center;
  margin-bottom: 10px;
  line-height: 5px;
`
