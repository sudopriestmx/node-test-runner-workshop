export function getCurrentFormattedDate() {
  const now = new Date()
  return `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getUTCDate().toString().padStart(2, '0')}`
}
