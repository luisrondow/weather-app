import * as React from 'react'

import * as Styles from './select.styles'
import { SelectProps } from './select.types'

export const Select = (props: SelectProps) => {
  const { options, onChange } = props

  return (
    <Styles.Select data-testid="select" onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <Styles.Option data-testid="select-option" key={option.value} value={option.value}>
          {option.label}
        </Styles.Option>
      ))}
    </Styles.Select>
  )
}
