import React from "react"
import { Link } from "gatsby"

import { ItemContainer, ItemLink, ItemName } from "./Navigation.styled"

const NavigationItem = ({ item, pathname, open }) => {
  const getLink = () => item.path

  return (
    <ItemContainer selected={pathname === getLink()}>
      <ItemLink to={getLink()}>
        <item.Icon size="23px" />
        <ItemName open={open}>
          <ItemLink to={getLink()}>{item.name}</ItemLink>
        </ItemName>
      </ItemLink>
    </ItemContainer>
  )
}

export default React.memo(NavigationItem)
