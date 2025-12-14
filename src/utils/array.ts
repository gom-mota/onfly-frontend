export const checkIfArrayIsValid = (value: unknown) => {
  if (!value) return false
  if (Array.isArray(value) && value.length) return true

  return false
}
