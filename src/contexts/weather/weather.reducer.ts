import { WeatherActions, WeatherContextStates, WEATHER_ACTIONS } from './weather.types'

/**
 * initial value of the context state
 */
const INITIAL_VALUE: WeatherContextStates = {
  weather: null,
  loading: false,
}

/**
 * The reducer will control every state of an context
 */
export const weatherReducer = (state: WeatherContextStates, action: WeatherActions): WeatherContextStates => {
  switch (action.type) {
    case WEATHER_ACTIONS.LOADING:
      return { ...state, loading: true }
    case WEATHER_ACTIONS.SET_WEATHER:
      return { weather: action.payload, loading: false }
    default:
      return state
  }
}

// export default the initial state
export default INITIAL_VALUE
