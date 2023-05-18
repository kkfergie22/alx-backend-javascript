function calculateNumber(a, b, type) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof type !== 'string') {
    return 'Invalid input';
  }

  if (type === 'SUBTRACT') {
    return Math.round(b) - Math.round(a);
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    } else return Math.round(a) / Math.round(b);
  } else return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
