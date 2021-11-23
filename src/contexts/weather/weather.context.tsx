import * as React from 'react'

import { useApi } from 'src/hooks/useApi'

import WEATHER_INITIAL_VALUE, { weatherReducer } from './weather.reducer'
import { WeatherContextValues, WeatherProviderProps, WEATHER_ACTIONS } from './weather.types'

export const WeatherContext = React.createContext<WeatherContextValues>({})

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [state, dispatch] = React.useReducer(weatherReducer, WEATHER_INITIAL_VALUE)

  function setWeather(city: string) {
    dispatch({ type: WEATHER_ACTIONS.LOADING })
    useApi(`/weather?q=${city}`)
      .get()
      .then(({ data }) => {
        dispatch({ type: WEATHER_ACTIONS.SET_WEATHER, payload: data })
      })
  }

  const actions = {
    setWeather,
  }

  return <WeatherContext.Provider value={{ ...state, actions }}>{children}</WeatherContext.Provider>
}

WeatherContext.displayName = 'WeatherContext'
