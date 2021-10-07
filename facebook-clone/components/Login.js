import { signIn } from "next-auth/client"
import Image from "next/image"
import React from "react"

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <Image
        src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
        width={300}
        height={200}
        alt='logo'
        layout='fixed'
      />
      <h1
        onClick={signIn}
        className='p-5 bg-blue-500 rounded-full my-20 cursor-pointer'
      >
        Login With Facebbok
      </h1>
    </div>
  )
}

export default Login
