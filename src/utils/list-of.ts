export const listOf = <T>(generator: () => T, length = 10) => {
  return Array.from({ length }, generator)
}
