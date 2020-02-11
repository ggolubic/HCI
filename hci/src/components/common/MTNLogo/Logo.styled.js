import styled, { css } from "styled-components"
import Img from "gatsby-image"

export const Logo = styled(Img)`
  width: 50px;
  margin: 30px 15px 0px 15px;
  transition: width 250ms ease-in-out;

  ${({ open }) =>
    open &&
    css`
      transition: width 250ms ease-in-out;
      width: 90px;
      overflow: hidden;
    `}
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90px;
  margin-bottom: 10vh;
`

export const LogoText = styled.span`
  font-size: 26px;
  font-weight: 600;
  margin-top: 30px;
  transition: font-size 250ms ease-in-out;
  font: ${({ theme }) => theme.font.primaryFont};
  color: ${({ theme }) => theme.orbit.paletteProductNormal};

  ${({ open }) =>
    !open &&
    css`
      font-size: 0px;
    `}
`
