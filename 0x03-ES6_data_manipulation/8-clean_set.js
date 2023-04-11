export default function cleanSet(set, startString) {
  const result = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.replace(startString, ''));
    }
  }
  return result.join('-');
}
