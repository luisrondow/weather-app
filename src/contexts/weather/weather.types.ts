import { Weather } from 'src/types/weather'

import { Actions, ContextType } from '../context.types'

export type WeatherProviderProps = {
  children: React.ReactNode
}

export interface WeatherContextStates {
  weather: Weather | null
  loading: boolean
}

export interface WeatherContextActions {
  setWeather(city: string): void
}

export interface WeatherContextValues extends ContextType<WeatherContextStates, WeatherContextActions> {}

export enum WEATHER_ACTIONS {
  SET_WEATHER = 'SET/WEATHER',
  LOADING = 'LOADING',
}

export type WeatherActions = Actions<WEATHER_ACTIONS>
