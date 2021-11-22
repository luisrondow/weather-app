export function celciusConverter(kelvinTemperature: number) {
  return Number((kelvinTemperature - 273.15).toFixed(1))
}

export function fahrenheitConverter(kelvinTemperature: number) {
  return Number((celciusConverter(kelvinTemperature) * 1.8 + 32).toFixed(1))
}
