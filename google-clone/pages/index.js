import Head from "next/head"
import Body from "../components/Home/Body"
import Footer from "../components/Home/Footer"
import Header from "../components/Home/Header"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </div>
  )
}
