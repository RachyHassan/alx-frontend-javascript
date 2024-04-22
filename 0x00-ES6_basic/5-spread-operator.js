export default function concatArrays(array1, array2, string) {
  const arrays = [...array1, ...array2, ...string];
  return arrays;
}
