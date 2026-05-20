import React from 'react'
import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'

export const Calculator: React.FC = () => {
  const calc = useCalculator()
  return (
    <div className="calculator">
      <div className="calc-head">
        <span className="brand">CASIO</span>
        <span className="model">fx-570LA X</span>
      </div>
      <Display value={calc.display} />
      <Keypad calc={calc} />
    </div>
  )
}
