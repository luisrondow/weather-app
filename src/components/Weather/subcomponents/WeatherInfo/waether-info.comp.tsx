import * as React from 'react'

import { Text } from 'src/components/common/Text/text.comp'
import { unixTimestampToHours } from 'src/utils/time'

import { TemperatureSymbol } from './weather-info.constants'
import * as Styles from './weather-info.styles'
import { WeatherInfoProps } from './weather-info.types'

export const WeatherInfo = (props: WeatherInfoProps) => {
  const { temperature, sunrise, sunset, timezone, temperatureUnit, weatherStateIcon } = props

  return (
    <Styles.Container data-testid="weather-info">
      <Styles.Temperature data-testid="temperature">{`${temperature} ${TemperatureSymbol[temperatureUnit]}`}</Styles.Temperature>
      <img id="wicon" src={`http://openweathermap.org/img/wn/${weatherStateIcon}@2x.png`} alt="Weather icon" />
      <Styles.SunnyPeriodConatiner>
        <Text>Sunrise: {unixTimestampToHours(sunrise, timezone)}</Text>
        <Text>Sunset: {unixTimestampToHours(sunset, timezone)}</Text>
      </Styles.SunnyPeriodConatiner>
    </Styles.Container>
  )
}
