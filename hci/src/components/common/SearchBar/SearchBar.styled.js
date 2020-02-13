import styled, { css } from "styled-components"

const SearchBar = styled.input`
  padding-left: 5px;
  margin-right: 6.7vw;
  border: solid 0px ${({ theme }) => theme.orbit.paletteProductNormal};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.2s all;
  margin-bottom: 25px;
  width: 150px;
  height: 3.3vh;
  ${({ direction }) =>
    direction === "row" &&
    css`
      margin-top: 10px;
      width: 200px;
      height: 4vh;
    `}
  @media screen and (max-width: 1280px) {
    margin-right: 7.25vw;
    margin-top: 2px;
  }
  ::placeholder {
    color: grey;
  }
  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  :focus {
    border: solid 1px ${({ theme }) => theme.orbit.paletteProductNormal};
  }
`
export default SearchBar