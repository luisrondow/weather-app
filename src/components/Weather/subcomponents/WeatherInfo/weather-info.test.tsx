import React from 'react'

import { render, screen } from '@testing-library/react'
import { unixTimestampToHours } from 'src/utils/time'

import { TemperatureUnit } from '../../weather.constants'

import { WeatherInfo } from './waether-info.comp'
import { TemperatureSymbol } from './weather-info.constants'

const mockWeatherInfo = {
  temperature: 30,
  timezone: -10800,
  icon: '01d',
  sunrise: 1637655117,
  sunset: 1637703267,
}

describe('WeatherInfo component', () => {
  it('should render WeatherInfo component with correct values', () => {
    const { temperature, timezone, sunrise, sunset, icon } = mockWeatherInfo

    const formatedSunnyPeriods = {
      sunrise: unixTimestampToHours(sunrise, timezone),
      sunset: unixTimestampToHours(sunset, timezone),
    }

    render(
      <WeatherInfo
        temperature={temperature}
        timezone={timezone}
        sunrise={sunrise}
        sunset={sunset}
        weatherStateIcon={icon}
        temperatureUnit={TemperatureUnit.Celsius}
      />
    )

    expect(screen.getByTestId('weather-info')).toBeInTheDocument()
    expect(screen.getByTestId('temperature').textContent).toBe(
      `${temperature} ${TemperatureSymbol[TemperatureUnit.Celsius]}`
    )
    expect(screen.getByText(/Sunrise/).textContent).toBe(`Sunrise: ${formatedSunnyPeriods.sunrise}`)
    expect(screen.getByText(/Sunset/).textContent).toBe(`Sunset: ${formatedSunnyPeriods.sunset}`)
  })

  it('should render correctly Fahrenheit symbol', () => {
    const { temperature, timezone, sunrise, sunset, icon } = mockWeatherInfo

    render(
      <WeatherInfo
        temperature={temperature}
        timezone={timezone}
        sunrise={sunrise}
        sunset={sunset}
        weatherStateIcon={icon}
        temperatureUnit={TemperatureUnit.Fahrenheit}
      />
    )

    expect(screen.getByTestId('weather-info')).toBeInTheDocument()
    expect(screen.getByTestId('temperature').textContent).toBe(
      `${temperature} ${TemperatureSymbol[TemperatureUnit.Fahrenheit]}`
    )
  })
})
