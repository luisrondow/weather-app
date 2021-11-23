import React from 'react'

import { render, screen } from '@testing-library/react'

import { TemperatureUnit } from '../../weather.constants'

import { WeatherControls } from './weather-controls.comp'

const mockSetTemperatureSwitch = jest.fn()

describe('WeatherControls component', () => {
  it('should render WeatherControls component', () => {
    render(
      <WeatherControls temperatureSwitch={TemperatureUnit.Celsius} setTemperatureSwitch={mockSetTemperatureSwitch} />
    )

    expect(screen.getByTestId('weather-controls')).toBeInTheDocument()
  })
})
