export default function cleanSet(set, startString) {
  let value = '';
  const newSet = new Set();

  for (const s of set) {
    if (s.startsWith(startString)) {
      newSet.add(s.substring(startString.length));
    }
  }
  value = Array.from(newSet).join('-');
  return value;
}
