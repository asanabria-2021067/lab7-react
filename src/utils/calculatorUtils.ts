export function formatResult(num: number, allowNegative = false): string {
  if (isNaN(num) || !isFinite(num)) {
    return 'ERROR'
  }
  if (num < 0 && !allowNegative) {
    return 'ERROR'
  }
  if (num > 999999999 || num < -99999999) {
    return 'ERROR'
  }

  const str = num.toString()
  if (str.length <= 9) {
    return str
  }

  const rounded = Math.round(num)
  if (rounded > 999999999 || rounded < -99999999) {
    return 'ERROR'
  }

  const signLength = num < 0 ? 1 : 0
  const maxChars = 9 - signLength
  const intLength = Math.floor(Math.abs(num)).toString().length
  if (intLength >= maxChars) {
    const roundedStr = Math.round(num).toString()
    return roundedStr.length <= 9 ? roundedStr : 'ERROR'
  }

  const allowedDecimals = maxChars - intLength - 1
  let formatted = num.toFixed(allowedDecimals)

  if (formatted.indexOf('.') > 0) {
    const parts = formatted.split('.')
    if (parts[0].length + parts[1].length + 1 > 9) {
      const newIntLength = parts[0].length
      const newAllowed = 9 - newIntLength - 1
      if (newAllowed <= 0) {
        formatted = Math.round(num).toString()
      } else {
        formatted = num.toFixed(newAllowed)
      }
    }
  }

  if (formatted.includes('.')) {
    while (formatted.endsWith('0')) {
      formatted = formatted.slice(0, -1)
    }
    if (formatted.endsWith('.')) {
      formatted = formatted.slice(0, -1)
    }
  }
  if (formatted.length > 9) {
    return 'ERROR'
  }

  return formatted
}
