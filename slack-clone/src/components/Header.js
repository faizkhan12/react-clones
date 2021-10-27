import { Avatar } from "@material-ui/core"
import { AccessTime, HelpOutline, Search } from "@material-ui/icons"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import styled from "styled-components"
import { auth } from "../firebase"
const Header = () => {
  const [user] = useAuthState(auth)

  return (
    <HeaderContainer>
      {/* left side */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt=''
        />
        <AccessTime />
      </HeaderLeft>
      {/* center */}
      <HeaderCenter>
        <Search />
        <input type='text' placeholder='Search Ziko HQ' />
      </HeaderCenter>
      {/* right side */}

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  background-color: var(--slack-color);
`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    color: #fff;
  }
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`

const HeaderCenter = styled.div`
  flex: 0.4;
  color: gray;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px solid gray;

  > input {
    border: none;
    background-color: transparent;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #fff;
  }
`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    color: #fff;
    margin-left: auto;
    margin-right: 20px;
  }
`
