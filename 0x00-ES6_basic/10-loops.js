export default function appendToEachArrayValue(array, appendString) {
  const newValue = [];
  for (const idx of array) {
    newValue.push(appendString + idx);
  }

  return newValue;
}
