export default function updateUniqueItems(map) {
  if (map.constructor !== Map) {
    throw new Error('Cannot process');
  }
  // eslint-disable-next-line prefer-const
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      value = 100;
      map.set(key, value);
    }
  }
}
