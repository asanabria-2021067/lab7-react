import { useState } from 'react'
import { formatResult } from '../utils/calculatorUtils'

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [operand, setOperand] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [shouldClear, setShouldClear] = useState(false)

  const inputDigit = (digit: string) => {
    if (display === 'ERROR' || shouldClear) {
      setDisplay(digit)
      setShouldClear(false)
    } else {
      if (display === '0') {
        setDisplay(digit)
      } else if (display.length < 9) {
        setDisplay(display + digit)
      }
    }
  }

  const inputDecimal = () => {
    if (display === 'ERROR' || shouldClear) {
      setDisplay('0.')
      setShouldClear(false)
    } else {
      if (!display.includes('.')) {
        if (display.length < 9) {
          setDisplay(display + '.')
        }
      }
    }
  }

  const clear = () => {
    setDisplay('0')
    setOperand(null)
    setOperator(null)
    setShouldClear(false)
  }

  const toggleSign = () => {
    if (display === 'ERROR' || display === '0') {
      return
    }
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else {
      if (display.length < 9) {
        setDisplay('-' + display)
      }
    }
  }

  const setOperation = (nextOperator: string) => {
    if (display === 'ERROR') return

    const currentValue = parseFloat(display)

    if (operator && !shouldClear) {
      const result = calculateValue(operand ?? 0, currentValue, operator)
      const formatted = formatResult(result, hasNegativeInput(operand, currentValue))
      setDisplay(formatted)
      if (formatted === 'ERROR') {
        setOperand(null)
        setOperator(null)
      } else {
        setOperand(parseFloat(formatted))
        setOperator(nextOperator)
      }
    } else {
      setOperand(currentValue)
      setOperator(nextOperator)
    }
    setShouldClear(true)
  }

  const calculate = () => {
    if (display === 'ERROR' || !operator || operand === null || shouldClear) {
      return
    }
    const currentValue = parseFloat(display)
    const result = calculateValue(operand, currentValue, operator)
    const formatted = formatResult(result, hasNegativeInput(operand, currentValue))
    setDisplay(formatted)
    setOperand(null)
    setOperator(null)
    setShouldClear(true)
  }

  const calculateValue = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return a / b
      case '%': return a % b
      default: return b
    }
  }

  const hasNegativeInput = (a: number | null, b: number) => (a ?? 0) < 0 || b < 0

  return {
    display,
    operand,
    operator,
    shouldClear,
    inputDigit,
    inputDecimal,
    clear,
    toggleSign,
    setOperation,
    calculate,
  }
}
