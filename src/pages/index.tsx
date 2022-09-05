import type { NextPage } from 'next'
import { Box, Center } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ContinentAdvantages } from '../components/ContinentAdvantages'
import { CTA } from '../components/CTA'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />
      <main>
        <Hero />
        <ContinentAdvantages />
        <Center>
          <Box border="1px" borderColor="gray.700" w="28" />
        </Center>
        <CTA />
      </main>
    </Box>
  )
}

export default Home
