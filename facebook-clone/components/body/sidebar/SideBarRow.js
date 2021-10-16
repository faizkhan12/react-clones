import Image from "next/image"
import React from "react"

const SideBarRow = ({ src, Icon, title }) => {
  return (
    <div className='flex items-center gap-2 p-4 cursor-pointer'>
      {src && (
        <Image
          src={src}
          className='rounded-full'
          width={30}
          height={30}
          layout='fixed'
        />
      )}
      {Icon && <Icon className='h-8 w-8 text-blue-500' />}
      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SideBarRow
