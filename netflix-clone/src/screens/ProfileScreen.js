import React from "react"
import { useSelector } from "react-redux"
import NavBar from "../components/NavBar"
import { selectUser } from "../features/userSlice"
import { auth } from "../firebase"
import "./ProfileScreen.css"

const ProfileScreen = () => {
  const user = useSelector(selectUser)

  return (
    <div className='profile__screen'>
      <NavBar />

      <div className='profile__screen__body'>
        <h1>Edit Profile</h1>
        <div className='profile__screen__info'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='avatar'
          />
          <div className='profile__screen__details'>
            <h2>{user.email}</h2>
            <div className='profile__screen__plans'>
              <h3>Plans (Current Plan: premium)</h3>
              <h4>Renewal date: </h4>
              <div className='profile__screen__row'>
                <h5>Netflix Standard</h5>
                <button>Subscribe</button>
              </div>
              <div className='profile__screen__row'>
                <h5>Netflix Basic</h5>
                <button>Subscribe</button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className='profile__screen_signout'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
