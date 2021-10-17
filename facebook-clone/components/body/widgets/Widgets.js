import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import React from "react"
import Contact from "./Contact"

const contacts = [
  {
    id: "1",
    src: "https://yt3.ggpht.com/yti/APfAmoEwEea3ypaAMiG69Jjr7meACJjUYzca4MAbhuSEsw=s88-c-k-c0x00ffffff-no-rj-mo",
    name: "Faiz",
  },
  {
    id: "2",
    src: "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
    name: "Bill Gates",
  },
  {
    id: "3",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg",
    name: "Mark Zuckerberg",
  },
  {
    id: "4",
    src: "https://yt3.ggpht.com/yti/APfAmoEwEea3ypaAMiG69Jjr7meACJjUYzca4MAbhuSEsw=s88-c-k-c0x00ffffff-no-rj-mo",
    name: "Khan",
  },
]

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center mb-5 text-gray-500'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Widgets
