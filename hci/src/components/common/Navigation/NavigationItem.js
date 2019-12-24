import React from "react"

import {
  ItemContainer,
  ItemLink,
  ItemName,
  ItemDescription,
} from "./Navigation.styled"

const NavigationItem = ({ item, pathname, open }) => {
  const getLink = () => item.path

  const isSelected = () => {
    if (item.default && pathname === "/") {
      return true
    } else if (pathname.includes(item.path)) {
      return true
    } else return false
  }
  return (
    <ItemLink to={getLink()}>
      <ItemContainer selected={isSelected()}>
        <ItemDescription>
          <item.Icon size="23px" />
          <ItemName open={open}>{item.name}</ItemName>
        </ItemDescription>
      </ItemContainer>
    </ItemLink>
  )
}

export default NavigationItem
