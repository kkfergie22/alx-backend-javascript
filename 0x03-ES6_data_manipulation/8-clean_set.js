export default function cleanSet(set, startString) {
  const result = [];
  if (typeof startString !== 'string' || startString === '' || startString === 'undefined' || startString.length === 0) {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.replace(startString, ''));
    }
  }
  const finalResult = `${result.join('-')}-`;
  return finalResult;
}
