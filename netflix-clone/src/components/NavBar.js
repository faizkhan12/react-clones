import React, { useEffect, useState } from "react"
import "./Navbar.css"

const NavBar = () => {
  const [show, setShow] = useState(false)

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <img
          className='nav__logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='logo'
          loading={"lazy"}
        />

        <img
          className='nav__avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='avatar'
          loading={"lazy"}
        />
      </div>
    </div>
  )
}

export default NavBar
