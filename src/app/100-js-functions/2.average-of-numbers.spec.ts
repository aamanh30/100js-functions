import { averageOfNumbers } from './2.average-of-numbers';

describe('averageOfNumbers', () => {
  it('should return the average of the numbers', () => {
    expect(averageOfNumbers(0, 0, 0)).toEqual(0);
    expect(averageOfNumbers(1, -1, 2, -2)).toEqual(0);
    expect(averageOfNumbers(11, 9, 33, 28)).toEqual(20.25);
  });

  it('should throw exception when no number is provided', () => {
    expect(() => averageOfNumbers()).toThrow(
      'No number found to compute the average'
    );
  });
});
