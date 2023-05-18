function calculateNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input';
  }

  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
