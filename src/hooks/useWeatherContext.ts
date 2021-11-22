import * as React from 'react'

import { WeatherContext } from 'src/contexts/weather/weather.context'
import { WeatherContextValues } from 'src/contexts/weather/weather.types'

export function useWeatherContext(): WeatherContextValues {
  const context = React.useContext(WeatherContext)

  if (!context) {
    throw new Error('useWeather must be within its context')
  }

  return context
}
