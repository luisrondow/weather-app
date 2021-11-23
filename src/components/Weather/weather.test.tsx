import React from 'react'

import { render, screen } from '@testing-library/react'

import { Weather } from './weather.comp'

describe('Weather component', () => {
  it('should render Weather component', () => {
    render(<Weather />)

    expect(screen.getByTestId('weather')).toBeInTheDocument()
  })
})
