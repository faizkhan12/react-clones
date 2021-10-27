import Button from "@material-ui/core/Button"
import React from "react"
import styled from "styled-components"
import { auth, provider } from "../firebase"

const Login = () => {
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://cdn-icons-png.flaticon.com/512/2111/2111615.png'
          alt=''
        />
        <h1>Sign in to the Slack 2.0</h1>
        <p>Welcome to Ziko HQ </p>
        <Button onClick={signIn}>Sign in With Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > Button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`
