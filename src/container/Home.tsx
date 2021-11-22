import * as React from 'react'

import { Header } from 'src/components/Header/header.comp'
import { Weather } from 'src/components/Weather/weather.comp'
import { PageWrapper } from 'src/styles/global'

const Home = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Weather />
      </PageWrapper>
    </>
  )
}

export default Home
