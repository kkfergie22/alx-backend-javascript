function calculateNumber(a, b) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   return 'Invalid input';
  // }
  const round_a = Math.round(a);
  const round_b = Math.round(b);
  const sum = round_a + round_b;

  return sum;
}

module.exports = calculateNumber;
