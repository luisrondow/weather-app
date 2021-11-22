import * as React from 'react'

import { WeatherControls } from './subcomponents/WeatherControls/weather-controls.comp'
import { WeatherInfo } from './subcomponents/WeatherInfo/waether-info.comp'
import * as Styles from './weather.styles'

export const Weather = () => {
  return (
    <Styles.Container>
      <WeatherControls />
      <WeatherInfo temperature={16} sunrise={1637568726} sunset={1637616824} />
    </Styles.Container>
  )
}
