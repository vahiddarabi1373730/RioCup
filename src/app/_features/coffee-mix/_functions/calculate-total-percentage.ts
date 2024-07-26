export function calculateTotalPercentage(value: any): boolean {
  let total = 0
  Object.keys(value).forEach(key => {
    total += Number(value[key])

  })
  return total > 100
}
