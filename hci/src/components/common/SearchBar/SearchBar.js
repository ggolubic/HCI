import styled, { css } from "styled-components"

const SearchBar = styled.input`
  padding-left: 5px;
  border: solid 0px ${({ theme }) => theme.orbit.paletteProductNormal};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.2s all;
  margin-bottom: 25px;
  width: calc(20vw + 50px);
  height: calc(3vh + 10px);
  font-size: 17px;
  ${({ direction }) =>
    direction === "row" &&
    css`
      margin-top: 10px;
    `}
  ::placeholder {
    color: grey;
  }
  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  :focus {
    border: solid 1px ${({ theme }) => theme.orbit.paletteProductNormal};
  }
  @media screen and (max-width: 1280px) {
    margin-top: 5px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 3px;
  }
  @media screen and (max-width: 370px) {
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (max-height: 550px) {
    height: 30px;
  }
`
export default SearchBar
