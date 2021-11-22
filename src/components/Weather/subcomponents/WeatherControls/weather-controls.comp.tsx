import * as React from 'react'

import Switch from 'react-switch'

import { TemperatureUnit } from './weather-controls.constants'
import * as Styles from './weather-controls.styles'

export const WeatherControls = () => {
  const [temperatureSwitch, setTemperatureSwitch] = React.useState(TemperatureUnit.Celsius)

  const handleSwitchChange = () => {
    setTemperatureSwitch(
      temperatureSwitch === TemperatureUnit.Celsius ? TemperatureUnit.Fahrenheit : TemperatureUnit.Celsius
    )
  }

  return (
    <Styles.Container>
      <select>
        <option value="lisbon">Lisbon</option>
        <option value="london">London</option>
      </select>
      <Styles.TemperatureSwitch>
        <Switch onChange={handleSwitchChange} checked={temperatureSwitch === TemperatureUnit.Fahrenheit} />
      </Styles.TemperatureSwitch>
    </Styles.Container>
  )
}
