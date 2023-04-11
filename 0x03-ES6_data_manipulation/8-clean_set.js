export default function cleanSet(set, startString) {
  const result = [];
  for (const item of set) {
    if (item.startsWith(startString) && startString !== '') {
      result.push(item.replace(startString, ''));
    }
  }
  return result.join('-');
}
