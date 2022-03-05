import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

const Login = () => {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black">
      <div
        className="absolute z-50 flex h-4/6 w-full flex-col items-center
      justify-center space-y-4"
      >
        <Image
          src="https://faizkhan.xyz/static/media/avatar1.0a9cd423.png"
          width={200}
          height={200}
        />
        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold"
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="h-screen w-full">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://links.papareact.com/55n"
        />
      </div>
    </div>
  )
}

export default Login
