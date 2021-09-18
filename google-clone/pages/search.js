import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import Header from "../components/Search/Header"
import SearchResults from "../components/Search/SearchResults"
import Response from "../Response"

const Search = ({ results }) => {
  const router = useRouter()
  console.log(results)
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header />

      {/* SearchResult */}
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyData = false
  const startIndex = context.query.start || "0"

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  )
  const res = useDummyData ? Response : await data.json()

  // After the server side rendered, pass the results to the clients

  return {
    props: {
      results: res,
    },
  }
}
