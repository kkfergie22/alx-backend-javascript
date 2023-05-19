function calculateNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input';
  }
  // const round_a = Math.round(a);
  // const round_b = Math.round(b);
  // const sum = round_a + round_b;

  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
