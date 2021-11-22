import { TemperatureUnit } from '../../weather.constants'

export type WeatherInfoProps = {
  temperature: number
  weatherStateIcon: string
  sunrise: number
  sunset: number
  timezone: number
  temperatureUnit: TemperatureUnit
}
