import styled, { css } from "styled-components"

const SearchBar = styled.input`
  padding-left: 5px;
  border: solid 0px ${({ theme }) => theme.orbit.paletteProductNormal};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.2s all;
  width: calc(20vw + 50px);
  ${({ direction }) => direction === "row" && css``}
  ::placeholder {
    color: grey;
  }
  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  :focus {
    border: solid 2px ${({ theme }) => theme.orbit.paletteProductNormal};
  }
  @media screen and (max-width: 369px) {
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
  }
`
export default SearchBar
