export default function hasValuesFromArray(set, array) {
  const bool = array.every((a) => set.has(a));
  return bool;
}
