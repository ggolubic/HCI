import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const ItemLink = styled(Link)`
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-decoration: none;
  display: flex;
`

export const ItemName = styled.div`
  padding-left: 10px;
  a {
    text-decoration: none;
  }
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

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
      border-color: ${({ theme }) => theme.orbit.paletteProductNormal};

      &:hover {
        background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
      }
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
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.navigationWidth}px;
  background-color: white;
  z-index: 5;
  transition: width 150ms ease-in-out;
  font-size: 12px;
  overflow: hidden;
  border-right: ${({ theme }) =>
    `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`};
  ${({ open }) =>
    open &&
    css`
      width: ${({ theme }) => theme.sizes.navigationExpandedWidth}px;

      ${ItemContainer} {
        color: ${({ theme }) => theme.orbit.colorTextPrimary};
      }
    `}
`
