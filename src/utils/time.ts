export function unixTimestampToHours(unixTimestamp: number, timezone: number) {
  const hourTimezone = timezone / 3600
  const date = new Date(unixTimestamp * 1000)
  const hours = `0${Math.abs(date.getUTCHours() + hourTimezone)}`
  const minutes = `0${date.getUTCMinutes()}`

  return `${hours.slice(-2)}:${minutes.slice(-2)}`
}
