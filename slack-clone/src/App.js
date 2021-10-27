import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Spinner from "react-spinkit"
import styled from "styled-components"
import "./App.css"
import Chat from "./components/Chat"
import Header from "./components/Header"
import Login from "./components/Login"
import SideBar from "./components/SideBar"
import { auth } from "./firebase"

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2111/2111615.png'
            alt=''
          />
          <Spinner name='ball-spin-fade-loader' color='purple' fadeIn='none' />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <SideBar />
              <Switch>
                <Route exact path='/'>
                  {/* chat */}
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  )
}

export default App

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const AppLoadingContents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`
