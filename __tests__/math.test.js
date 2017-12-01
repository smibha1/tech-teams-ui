const operations = require('../test/math');

test('should properly add numbers', () => {
  expect(operations.add(1, 3)).toBe(4);
});

test('should subtract numbers', () => {
  expect(operations.subtract(5, 10)).toBe(-5);
});

test('should subtract numbers', () => {
  expect(operations.multiply(5, 10)).toBe(50);
});
