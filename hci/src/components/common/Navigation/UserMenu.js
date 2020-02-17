import React, { useContext } from "react"
import styled, { css } from "styled-components"
import Popover from "@kiwicom/orbit-components/lib/Popover"
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice"
import LogoutIcon from "@kiwicom/orbit-components/lib/icons/Logout"
import ChevronDownIcon from "@kiwicom/orbit-components/lib/icons/ChevronDown"

import avatarImage from "../../../images/avatar.jpg"
import genericAvatarImage from "../../../images/genericAvatar.png"

import { UserCtx } from "../../Services/Navigation/navigation"
const Container = styled.div`
  position: absolute;
  bottom: 50px;
  margin: ${({ open }) => (open ? "20px 30px" : "20px 15px")};
  transition: all 0.5s;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const UserInfoWrapper = styled.div`
  margin-left: 10px;
`

const UserName = styled.div`
  color: rgb(0, 0, 0);
  font-size: 16px;
  color: ${({ theme }) => theme.orbit.paletteProductNormal};
  transition: 0.3s all;
  :hover {
    color: grey;
  }
`

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-bottom: 0;
`

const UserMenu = ({ navigationOpen }) => {
  const {
    state: { loggedIn, user },
    logIn,
    logOut,
  } = useContext(UserCtx)

  return (
    <Container open={navigationOpen}>
      <Popover
        noPadding
        content={
          <>
            {loggedIn ? (
              <ListChoice
                onClick={logOut}
                title="Sign Out"
                icon={<LogoutIcon size="small" />}
              />
            ) : (
              <ListChoice
                onClick={logIn}
                title="Sign In"
                icon={<LogoutIcon />}
              />
            )}
          </>
        }
      >
        <UserWrapper role="button">
          <Avatar
            src={loggedIn ? avatarImage : genericAvatarImage}
            alt="User avatar"
          />
          {navigationOpen && (
            <UserInfoWrapper>
              <UserName>
                {loggedIn ? (
                  <span>
                    {user} <ChevronDownIcon size="small" />
                  </span>
                ) : (
                  <span>
                    Guest <ChevronDownIcon size="small" />
                  </span>
                )}
              </UserName>
            </UserInfoWrapper>
          )}
        </UserWrapper>
      </Popover>
    </Container>
  )
}

export default UserMenu
