import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import { login, logout, selectUser } from "./features/userSlice"
import { auth } from "./firebase"
import LoginScreen from "./screens/auth/LoginScreen"
import HomeScreen from "./screens/home_screen/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"

function App() {
  const user = useSelector(selectUser)
  console.log(user)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in user
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        // logged out user
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  )
}

export default App
