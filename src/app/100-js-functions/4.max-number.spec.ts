import { maxNumber } from './4.max-number';

describe('maxNumber', () => {
  it('should return the maximum number', () => {
    expect(maxNumber(0, 0, 0, 0)).toEqual(0);
    expect(maxNumber(-4, 6, -3, 0)).toEqual(6);
    expect(maxNumber(-3, -2, -1)).toEqual(-1);
  });
});
