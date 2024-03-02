export const useArray = () => {
  const createDeepCopy = (arr: unknown[]) => JSON.parse(JSON.stringify(arr))

  return {
    deepCopy: createDeepCopy
  }
}
