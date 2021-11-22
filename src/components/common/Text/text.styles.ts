import styled from 'styled-components'

import { TextProps } from './text.types'

export const Text = styled.span<TextProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => `${color}`};
  font-weight: 300;
`
