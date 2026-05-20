import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { Calculator } from '../components/Calculator'
import React from 'react'

describe('Calculator App Tests', () => {
  const clickBtn = (label: string) => {
    const btn = screen.getByRole('button', { name: label })
    fireEvent.click(btn)
  }

  const getDisplayValue = () => {
    const display = screen.getByTestId('display')
    return display.textContent
  }

  test('Numeric Input & 9-Character Limit', () => {
    render(<Calculator />)
    expect(getDisplayValue()).toBe('0')

    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    nums.forEach((num) => clickBtn(num))
    expect(getDisplayValue()).toBe('123456789')

    clickBtn('0')
    expect(getDisplayValue()).toBe('123456789')

    clickBtn('C')
    expect(getDisplayValue()).toBe('0')

    clickBtn('1')
    clickBtn('.')
    const decimalNums = ['2', '3', '4', '5', '6', '7', '8']
    decimalNums.forEach((num) => clickBtn(num))
    expect(getDisplayValue()).toBe('1.2345678')

    clickBtn('9')
    expect(getDisplayValue()).toBe('1.2345678')
  })

  test('Standard Arithmetic Operations', () => {
    render(<Calculator />)

    clickBtn('1')
    clickBtn('2')
    clickBtn('+')
    clickBtn('2')
    clickBtn('5')
    clickBtn('=')
    expect(getDisplayValue()).toBe('37')

    clickBtn('*')
    clickBtn('2')
    clickBtn('=')
    expect(getDisplayValue()).toBe('74')

    clickBtn('-')
    clickBtn('2')
    clickBtn('4')
    clickBtn('=')
    expect(getDisplayValue()).toBe('50')

    clickBtn('/')
    clickBtn('4')
    clickBtn('=')
    expect(getDisplayValue()).toBe('12.5')

    clickBtn('%')
    clickBtn('3')
    clickBtn('=')
    expect(getDisplayValue()).toBe('0.5')
  })

  test('Error Handling & Limits', () => {
    render(<Calculator />)

    clickBtn('5')
    clickBtn('-')
    clickBtn('8')
    clickBtn('=')
    expect(getDisplayValue()).toBe('-3')

    clickBtn('C')

    const overflowNums = ['5', '0', '0', '0', '0', '0', '0', '0', '0']
    overflowNums.forEach((num) => clickBtn(num))
    clickBtn('*')
    clickBtn('2')
    clickBtn('=')
    expect(getDisplayValue()).toBe('ERROR')

    clickBtn('C')
    clickBtn('8')
    clickBtn('/')
    clickBtn('0')
    clickBtn('=')
    expect(getDisplayValue()).toBe('ERROR')
  })

  test('Negative Sign +/- Toggle', () => {
    render(<Calculator />)

    clickBtn('5')
    clickBtn('+/-')
    expect(getDisplayValue()).toBe('-5')

    clickBtn('+/-')
    expect(getDisplayValue()).toBe('5')

    clickBtn('+/-')
    const limitNums = ['1', '2', '3', '4', '5', '6', '7', '8']
    limitNums.forEach((num) => clickBtn(num))
    expect(getDisplayValue()).toBe('-51234567')

    clickBtn('9')
    expect(getDisplayValue()).toBe('-51234567')

    clickBtn('+')
    const calcNums = ['5', '1', '2', '3', '4', '5', '7', '0']
    calcNums.forEach((num) => clickBtn(num))
    clickBtn('=')
    expect(getDisplayValue()).toBe('3')
  })

  test('Precision Formatting (Division & Modulo)', () => {
    render(<Calculator />)

    clickBtn('2')
    clickBtn('2')
    clickBtn('/')
    clickBtn('7')
    clickBtn('=')
    expect(getDisplayValue()).toBe('3.1428571')
  })
})
