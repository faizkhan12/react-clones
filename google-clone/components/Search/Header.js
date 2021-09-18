import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useRef } from "react"
import Avatar from "../Home/Avatar"
import HeaderOptions from "./HeaderOptions"

const Header = () => {
  const searchInputRef = useRef(null)
  const router = useRouter()
  const search = (e) => {
    e.preventDefault()

    const term = searchInputRef.current.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          height={40}
          width={120}
          loading={"lazy"}
          className='cursor-pointer'
          onClick={() => router.push("/")}
        />
        <form className='flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 smr-5 flex-grow'>
          <input
            ref={searchInputRef}
            type='text'
            className='flex-grow w-full focus:outline-none'
          />
          <XIcon
            className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover: scale-125 sm:mr-3'
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />

          <button hidden type='submit' onClick={search} />
        </form>
        <div className='flex ml-auto'>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
          <Avatar
            className='ml-auto'
            url={
              "https://lh3.googleusercontent.com/ogw/ADea4I6gGf3j_j-ImfBgumBAXw_pn6Wj-cH8Jk99wBnWFw=s32-c-mo"
            }
          />
        </div>
      </div>
      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  )
}

export default Header
