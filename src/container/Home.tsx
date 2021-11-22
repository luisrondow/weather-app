import * as React from 'react'

import { Header } from 'src/components/Header/header.comp'
import { Weather } from 'src/components/Weather/weather.comp'
import { useWeatherContext } from 'src/hooks/useWeatherContext'
import { PageWrapper } from 'src/styles/global'

const INITIAL_CITY = 'lisbon'

const Home = () => {
  const { actions } = useWeatherContext()

  React.useEffect(() => {
    actions?.setWeather(INITIAL_CITY)
  }, [])

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
