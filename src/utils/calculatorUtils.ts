export function formatResult(num: number): string {
  if (isNaN(num) || !isFinite(num)) {
    return 'ERROR'
  }
  if (num < 0) {
    return 'ERROR'
  }
  if (num > 999999999) {
    return 'ERROR'
  }

  const str = num.toString()
  if (str.length <= 9) {
    return str
  }

  const rounded = Math.round(num)
  if (rounded > 999999999) {
    return 'ERROR'
  }

  const intLength = Math.floor(num).toString().length
  if (intLength >= 9) {
    return Math.round(num).toString()
  }

  const allowedDecimals = 9 - intLength - 1
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

  return formatted
}
