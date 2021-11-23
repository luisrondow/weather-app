import * as React from 'react'

import { useWeatherContext } from 'src/hooks/useWeatherContext'
import { celciusConverter, fahrenheitConverter } from 'src/utils/temperature'

import { Spinner } from '../common/Spinner/spinner.comp'

import { WeatherControls } from './subcomponents/WeatherControls/weather-controls.comp'
import { WeatherInfo } from './subcomponents/WeatherInfo/waether-info.comp'
import { TemperatureUnit } from './weather.constants'
import * as Styles from './weather.styles'

export const Weather = () => {
  const { weather, loading } = useWeatherContext()

  const [temperatureSwitch, setTemperatureSwitch] = React.useState(TemperatureUnit.Celsius)
  const [temperature, setTemperature] = React.useState(() => {
    if (weather) {
      return temperatureSwitch === TemperatureUnit.Celsius
        ? celciusConverter(weather?.main.temp)
        : fahrenheitConverter(weather?.main.temp)
    }

    return 0
  })

  React.useEffect(() => {
    if (weather) {
      setTemperature(
        temperatureSwitch === TemperatureUnit.Celsius
          ? celciusConverter(weather?.main.temp)
          : fahrenheitConverter(weather?.main.temp)
      )
    }
  }, [weather, temperatureSwitch])

  return (
    <Styles.Container data-testid="weather">
      <WeatherControls temperatureSwitch={temperatureSwitch} setTemperatureSwitch={setTemperatureSwitch} />
      {loading ? (
        <Spinner />
      ) : (
        <WeatherInfo
          temperature={temperature}
          timezone={weather?.timezone || 0}
          weatherStateIcon={weather?.weather[0].icon || '01d'}
          sunrise={weather?.sys.sunrise || 0}
          sunset={weather?.sys.sunset || 0}
          temperatureUnit={temperatureSwitch}
        />
      )}
    </Styles.Container>
  )
}
