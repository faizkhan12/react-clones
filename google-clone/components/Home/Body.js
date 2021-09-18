import { SearchIcon } from "@heroicons/react/outline"
import { MicrophoneIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useRef } from "react"

const Body = () => {
  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term) return

    // redirect user to search page
    router.push(`/search?term=${term}`)
  }

  const feelingLucky = (e) => {
    e.preventDefault()
  }

  return (
    <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
      <Image
        src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        height={92}
        width={300}
        loading={"lazy"}
      />
      <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
        <SearchIcon className='h-5 mr-3 text-gray-500' />
        <input
          ref={searchInputRef}
          type='text'
          className='flex-grow  focus:outline-none '
        />
        <MicrophoneIcon className='h-5 text-blue-500' />
      </div>
      <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
        <button onClick={search} className='btn'>
          Google Search
        </button>
        <button onClick={feelingLucky} className='btn'>
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  )
}

export default Body
