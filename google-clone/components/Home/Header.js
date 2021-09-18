import { ViewGridIcon } from "@heroicons/react/solid"
import React from "react"
import Avatar from "./Avatar"

const Header = () => {
  return (
    <header className='flex justify-between  p-5 w-full text-sm text-gray-700'>
      {/* left */}
      <div className='flex space-x-4 items-center'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>
      {/* right */}
      <div className='flex space-x-4 items-center'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>

        <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
        <Avatar
          url={
            "https://lh3.googleusercontent.com/ogw/ADea4I6gGf3j_j-ImfBgumBAXw_pn6Wj-cH8Jk99wBnWFw=s32-c-mo"
          }
        />
      </div>
    </header>
  )
}

export default Header
