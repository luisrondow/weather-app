import * as React from 'react'

import { unixTimestampToHours } from 'src/utils/time'

import * as Styles from './weather-info.styles'
import { WeatherInfoProps } from './weather-info.types'

export const WeatherInfo = (props: WeatherInfoProps) => {
  const { temperature, sunrise, sunset } = props

  return (
    <Styles.Container>
      <Styles.Temperature>{temperature} ºC</Styles.Temperature>
      <img id="wicon" src={'http://openweathermap.org/img/wn/10d@2x.png'} alt="Weather icon" />
      <Styles.SunnyPeriodConatiner>
        <Styles.SunnyPeriodContent>Sunrise: {unixTimestampToHours(sunrise)}</Styles.SunnyPeriodContent>
        <Styles.SunnyPeriodContent>Sunset: {unixTimestampToHours(sunset)}</Styles.SunnyPeriodContent>
      </Styles.SunnyPeriodConatiner>
    </Styles.Container>
  )
}
