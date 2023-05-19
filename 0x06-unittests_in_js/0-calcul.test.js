const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should round two positive whole numbers and return the sum', function () {
    const result = calculateNumber(3, 4);
    assert.strictEqual(result, 7);
  });

  it('should round two positive decimal numbers and return the sum', function () {
    const result = calculateNumber(3.6, 4.2);
    assert.strictEqual(result, 8);
  });

  it('should round two negative numbers and return the sum', function () {
    const result = calculateNumber(-5, -3.8);
    assert.strictEqual(result, -9);
  });

  it('should round a negative number and 0 and return the sum', function () {
    const result = calculateNumber(-2.3, 0);
    assert.strictEqual(result, -2);
  });

  it('should round a positive number and 0 and return the sum', function () {
    const result = calculateNumber(8.3, 0);
    assert.strictEqual(result, 8);
  });

  it('should round two very small numbers and return the sum', function () {
    const result = calculateNumber(0.1, 0.00001);
    assert.strictEqual(result, 0);
  });

  it('should round two fractions and return the sum', function () {
    const result = calculateNumber(1 / 3, 1 / 6);
    assert.strictEqual(result, 0);
  });

  it('should evaluate NaN and a number and return the sum', function () {
    const result = calculateNumber(NaN, 5);
    assert.strictEqual(result, NaN);
  });

  it('should evaluate infinity and a number and return the sum', function () {
    const result = calculateNumber(Infinity, 5);
    assert.strictEqual(result, Infinity);
  });

  it('should evaluate two 0s of different signs and return the sum', function () {
    const result = calculateNumber(-0, 0);
    assert.strictEqual(result, 0);
  });

  it('should round two zeroes 0 and return the sum', function () {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });

  it('should round two large numbers and return the sum', function () {
    const result = calculateNumber(123456789, 987654321);
    assert.strictEqual(result, 1111111110);
  });

  it('should round two large numbers and return the sum', function () {
    const result = calculateNumber(123456789.2, 987654321.7);
    assert.strictEqual(result, 1111111111);
  });

  it('should return an error', function () {
    const result = calculateNumber(5, 'abc');
    assert.strictEqual(result, 'Invalid input');
  });

  it('should return an error', function () {
    const result = calculateNumber('abc', 'xyz');
    assert.strictEqual(result, 'Invalid input');
  });

  it('should return an error', function () {
    const result = calculateNumber(5, true);
    assert.strictEqual(result, 'Invalid input');
  });

  it('should return an error', function () {
    const result = calculateNumber(false, true);
    assert.strictEqual(result, 'Invalid input');
  });
});
