import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import "./LoginScreen.css"
import SignUpScreen from "./SignUpScreen"

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className='login__screen'>
      <div className='login__screen__background'>
        <img
          className='login__screen__logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='logo'
        />
        <button
          onClick={() => setSignIn(true)}
          className='login__screen__button'
        >
          Sign In
        </button>
        <div className='login__screen__gradient' />
      </div>
      <div className='login__screen__body'>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className='login__screen__input'>
              <form>
                <input type='email' placeholder='Email Address' />

                <button
                  onClick={() => setSignIn(true)}
                  className='login__screen__getStarted'
                >
                  Get Started
                  <span>
                    <FontAwesomeIcon
                      className='login__screen__icon'
                      icon={faArrowRight}
                    />
                  </span>
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginScreen
