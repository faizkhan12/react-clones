import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid"
import Image from "next/image"
import React from "react"
import HeaderIcon from "./HeaderIcon"

const Header = () => {
  return (
    <div className='flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md'>
      <div className='flex items-center'>
        {/* left */}
        <Image
          src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
          width={60}
          height={40}
          alt='logo'
          layout='fixed'
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            className='hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>
      {/* center */}
      <div className='flex flex-grow justify-center'>
        <div className='flex space-x-6 md:space-x-2 '>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* TODO: Profile pic */}
        <p className='pr-3 font-semibold whitespace-nowrap'>Faiz Khan</p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  )
}

export default Header
