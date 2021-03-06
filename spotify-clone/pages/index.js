import Head from "next/head"
import Center from "../components/Center"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-black h-screen overflow-hidden'>
        <main className='flex'>
          {/* Sidebar */}
          <Sidebar />
          {/* Center */}
          <Center />
        </main>
        <div>{/* Player */}</div>
      </div>
    </div>
  )
}
