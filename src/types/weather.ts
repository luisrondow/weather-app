type WeatherItem = {
  id: number
  main: string
  description: string
  icon: string
}

type WeatherMain = {
  temp: number
}

type WeatherSys = {
  sunrise: number
  sunset: number
}

export type Weather = {
  id: number
  weather: Array<WeatherItem>
  main: WeatherMain
  sys: WeatherSys
  timezone: number
}
