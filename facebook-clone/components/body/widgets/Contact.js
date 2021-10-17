import Image from "next/image"
import React from "react"

const Contact = ({ src, name }) => {
  return (
    <div className='flex items-center space-x-3 mb-2 rounded-xl relative cursor-pointer hover:bg-gray-200 p-2'>
      <Image
        className='rounded-full'
        src={src}
        objectFit='cover'
        width={50}
        height={50}
        layout='fixed'
      />
      <p>{name}</p>
      <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full'></div>
    </div>
  )
}

export default Contact
