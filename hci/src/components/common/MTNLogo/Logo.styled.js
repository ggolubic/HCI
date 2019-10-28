import styled from "styled-components"

export const LargeLogo = styled.img`
  width: 90px;
  margin: 30px 15px 0 10px;
`
export const SmallLogo = styled.img`
  width: 50px;
  margin: 30px 15px 0 10px;
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
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
`
