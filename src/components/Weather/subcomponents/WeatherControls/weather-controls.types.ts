import { TemperatureUnit } from '../../weather.constants'

export type WeatherControlsProps = {
  temperatureSwitch: TemperatureUnit
  setTemperatureSwitch: (newTemperatureUnit: TemperatureUnit) => void
}
