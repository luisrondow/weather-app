import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import { Select } from './select.comp'

export const mockedOptions = [
  {
    label: 'Value 1',
    value: 'valueone',
  },
  {
    label: 'Value 2',
    value: 'valuetwo',
  },
]

const mockedOnChange = jest.fn()

describe('Select component', () => {
  it('should render Select component', () => {
    render(<Select options={mockedOptions} onChange={mockedOnChange} />)

    expect(screen.getByTestId('select')).toBeInTheDocument()
  })

  it('should render the options correctyle', () => {
    render(<Select options={mockedOptions} onChange={mockedOnChange} />)

    const options = screen.getAllByTestId('select-option')

    expect(screen.getByTestId('select')).toBeInTheDocument()

    options.forEach((option, index) => {
      expect(option.textContent).toBe(mockedOptions[index].label)
    })
  })

  it('should select an option', () => {
    render(<Select options={mockedOptions} onChange={mockedOnChange} />)

    const options = screen.getAllByTestId('select-option') as HTMLOptionElement[]

    expect(screen.getByTestId('select')).toBeInTheDocument()

    fireEvent.change(screen.getByTestId('select'), { target: { value: mockedOptions[1].value } })

    expect(mockedOnChange).toHaveBeenCalled()
    expect(options[0].selected).toBeFalsy()
    expect(options[1].selected).toBeTruthy()
  })
})
