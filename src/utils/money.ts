export const formatCurrency = (value: number, config?: 'hideZeroCents') => {
  const hasFraction = value % 1 !== 0

  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: config === 'hideZeroCents' && !hasFraction ? 0 : 2,
    maximumFractionDigits: 2,
  })
}
