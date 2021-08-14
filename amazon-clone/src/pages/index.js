import Head from "next/head"
import Banner from "../components/Banner"
import Header from "../components/Header"
import ProductFeed from "../components/ProductFeed"

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

// making asyncronous call from next js server and returning it to component
export async function getServerSideProps(context) {
  const result = await fetch("https://fakestoreapi.com/products")
  const products = await result.json()

  // passing data from server to components
  return {
    props: {
      products: products,
    },
  }
}
