export interface Calc {
  inputDigit: (d: string) => void
  inputDecimal: () => void
  toggleSign: () => void
  clear: () => void
  calculate: () => void
  setOperation: (op: string) => void
}
