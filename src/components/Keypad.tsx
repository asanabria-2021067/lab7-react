import React from 'react'
import { Button } from './Button'
import type { Calc } from '../types/calculator'
const keys = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
export const Keypad: React.FC<{ calc: Calc }> = ({ calc }) => {
  const click = (k: string) =>
    /\d/.test(k) ? calc.inputDigit(k) : k === '.' ? calc.inputDecimal() : k === '+/-' ? calc.toggleSign()
      : k === 'C' ? calc.clear() : k === '=' ? calc.calculate() : calc.setOperation(k)
  const cls = (k: string) =>
    /\d/.test(k) ? `btn-num btn-${k}` : ['/', '*', '-', '+', '=', '%'].includes(k) ? 'btn-op' : 'btn-fn'
  return <div className="keypad">{keys.map((k) =>
    <Button key={k} label={k} onClick={() => click(k)} className={'btn ' + cls(k)} />)}</div>
}
