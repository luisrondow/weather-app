import * as React from 'react'

import Switch from 'react-switch'
import { Select } from 'src/components/common/Select/select.comp'
import { Text } from 'src/components/common/Text/text.comp'
import { useWeatherContext } from 'src/hooks/useWeatherContext'

import { TemperatureUnit } from '../../weather.constants'

import { CITIES, SwitchColors } from './weather-controls.constants'
import * as Styles from './weather-controls.styles'
import { WeatherControlsProps } from './weather-controls.types'

export const WeatherControls = (props: WeatherControlsProps) => {
  const { temperatureSwitch, setTemperatureSwitch } = props
  const { actions } = useWeatherContext()

  const handleSwitchChange = () => {
    setTemperatureSwitch(
      temperatureSwitch === TemperatureUnit.Celsius ? TemperatureUnit.Fahrenheit : TemperatureUnit.Celsius
    )
  }

  const handleSelectChange = (value: string) => {
    actions?.setWeather(value)
  }

  return (
    <Styles.Container data-testid="weather-controls">
      <Select options={CITIES} onChange={handleSelectChange} />
      <Styles.TemperatureSwitch>
        <Text color={'#FFF'}>°C</Text>
        <Switch
          width={40}
          height={16}
          handleDiameter={12}
          onColor={SwitchColors.barColor}
          onHandleColor={SwitchColors.handleColor}
          offHandleColor={SwitchColors.handleColor}
          activeBoxShadow={`0 0 2px 3px ${SwitchColors.handleColor}`}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleSwitchChange}
          checked={temperatureSwitch === TemperatureUnit.Fahrenheit}
        />
        <Text color={'#FFF'}>°F</Text>
      </Styles.TemperatureSwitch>
    </Styles.Container>
  )
}
