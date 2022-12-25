const mathOperations = require('./mathOperations');

describe('mathOperations', () => {
  describe('sum', () => {
    it('should return the sum of two numbers', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
      expect(mathOperations.sum(-1, 2)).toBe(1);
      expect(mathOperations.sum(0, 0)).toBe(0);
    });
  });

  describe('diff', () => {
    it('should return the difference of two numbers', () => {
      expect(mathOperations.diff(1, 2)).toBe(-1);
      expect(mathOperations.diff(-1, 2)).toBe(-3);
      expect(mathOperations.diff(0, 0)).toBe(0);
    });
  });

  describe('product', () => {
    it('should return the product of two numbers', () => {
      expect(mathOperations.product(1, 2)).toBe(2);
      expect(mathOperations.product(-1, 2)).toBe(-2);
      expect(mathOperations.product(0, 0)).toBe(0);
    });
  });
});
