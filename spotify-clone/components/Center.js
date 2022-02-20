import { ChevronDownIcon } from "@heroicons/react/outline"
import { shuffle } from "lodash"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { playlistIdState, playlistState } from "../atoms/PlaylistAtom"
import useSpotify from "../hooks/useSpotify"

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
]

const Center = () => {
  const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [color, setColor] = useState(null)
  const playlistId = useRecoilState(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [playlistId])

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data) => {
      setPlaylist(data.body)
    })
  }, [spotifyApi, playlistId])

  return (
    <div className='flex-grow'>
      <header className='absolute top-5 right-8'>
        <div className='flex items-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
          <img
            className='rounded-full w-10 h-10'
            src={session?.user.image}
            alt=''
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        trt
      </section>
    </div>
  )
}

export default Center
