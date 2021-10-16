import React from "react"

const StoryCard = ({ name, src, profile }) => {
  return (
    <div
      className='relative h-14 w-14 md:h-20 md:w-20
    lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition-duration-200 transform ease-in hover:scale-105 hover:animate-pulse'
    >
      <img
        className='absolute top-10 opacity-0 z-50 lg:opacity-100 rounded-full'
        src={profile}
        width={40}
        height={40}
        layout='fixed'
      />
      <img
        className='object-cover rounded-full filter brightness-75 lg:rounded-3xl'
        src={src}
        layout='fill'
      />
    </div>
  )
}

export default StoryCard
