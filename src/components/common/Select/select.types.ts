export type SelectProps = {
  options: Array<{
    value: string
    label: string
  }>
  onChange: (value: string) => void
}
