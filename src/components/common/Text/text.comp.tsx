import * as React from 'react'

import * as Styles from './text.styles'
import { TextProps } from './text.types'

export const Text = ({ color, fontSize, children }: TextProps) => {
  return (
    <Styles.Text color={color} fontSize={fontSize}>
      {children}
    </Styles.Text>
  )
}
