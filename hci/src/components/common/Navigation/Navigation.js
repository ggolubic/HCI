import React, { useState, useEffect, useCallback, useMemo } from "react"

import ChevronLeftIcon from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import ChevronRightIcon from "@kiwicom/orbit-components/lib/icons/ChevronRight"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"

import { mainNavigationItems } from "consts/routes"
import {
  NavigationContainer,
  NavigationControlContainer,
  NavigationControlText,
} from "./Navigation.styled"

import NavigationItem from "./NavigationItem"
import NavigationFooter from "./NavigationFooter"
import MTNLogo from "../MTNLogo/Logo"

const Navigation = ({ location, logo }) => {
  const resizeWidth = 1280
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  const key = isClient ? `client` : `server`

  const [windowSize, setWindowSize] = useState(
    (typeof window !== "undefined" && window.innerWidth) || 1200
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize(window.innerWidth)
    }
  }, [])

  const largeScreen = useMemo(() => {
    return windowSize >= resizeWidth
  }, [windowSize])

  const [navigationOpen, setNavigationOpen] = useState(largeScreen)

  useEffect(() => {
    if (windowSize < resizeWidth) {
      setNavigationOpen(false)
    } else if (windowSize >= resizeWidth) {
      setNavigationOpen(true)
    }
  }, [windowSize])

  const expandNavigation = useCallback(() => {
    setNavigationOpen(true)
  }, [])

  const collapseNavigation = useCallback(() => {
    setNavigationOpen(false)
  }, [])

  const onControlClick = useMemo(() => {
    return navigationOpen ? collapseNavigation : expandNavigation
  }, [navigationOpen])

  return (
    <NavigationContainer open={navigationOpen} key={key}>
      <MTNLogo open={navigationOpen} src={logo} />
      {mainNavigationItems.map((item, id) => (
        <NavigationItem
          key={id}
          item={item}
          pathname={location.pathname}
          open={navigationOpen}
        ></NavigationItem>
      ))}
      <NavigationControlContainer>
        <ButtonLink
          type="secondary"
          iconLeft={!navigationOpen && <ChevronRightIcon />}
          iconRight={navigationOpen && <ChevronLeftIcon />}
          size="small"
          title="Toggle navigation"
          onClick={onControlClick}
          ariaExpanded={navigationOpen}
        >
          {navigationOpen && (
            <NavigationControlText>Collapse menu</NavigationControlText>
          )}
        </ButtonLink>
      </NavigationControlContainer>
      {navigationOpen && <NavigationFooter />}
    </NavigationContainer>
  )
}

export default React.memo(Navigation)
