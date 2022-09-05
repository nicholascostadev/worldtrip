import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />
      <main></main>
    </Box>
  )
}

export default Home
