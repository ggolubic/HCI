import React from "react"

import {
  ItemContainer,
  ItemLink,
  ItemName,
  ItemDescription,
} from "./Navigation.styled"

const NavigationItem = ({ item, pathname, open }) => {
  const getLink = () => item.path

  return (
    <ItemLink to={getLink()}>
      <ItemContainer selected={pathname.includes(getLink())}>
        <ItemDescription>
          <item.Icon size="23px" />
          <ItemName open={open}>{item.name}</ItemName>
        </ItemDescription>
      </ItemContainer>
    </ItemLink>
  )
}

export default NavigationItem
