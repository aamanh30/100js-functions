import { monthsToWait } from './5.months-to-wait';

describe('monthsToWait', () => {
  it('should return the number of months to wait', () => {
    expect(monthsToWait(4, 6)).toEqual(2);
    expect(monthsToWait(0, 0)).toEqual(0);
    expect(monthsToWait(11, 11)).toEqual(0);
  });

  it('should throw exception when start month is not valid', () => {
    expect(() => monthsToWait(-1, 0)).toThrow('Start month is not valid');
    expect(() => monthsToWait(12, 0)).toThrow('Start month is not valid');
  });

  it('should throw exception when end month is not valid', () => {
    expect(() => monthsToWait(0, -1)).toThrow('End month is not valid');
    expect(() => monthsToWait(10, 12)).toThrow('End month is not valid');
  });

  it('should throw exception when start month is greater than end month', () => {
    expect(() => monthsToWait(6, 4)).toThrow(
      'Start month cannot be greater than end month'
    );
    expect(() => monthsToWait(11, 0)).toThrow(
      'Start month cannot be greater than end month'
    );
  });
});
