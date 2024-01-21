import { minutesToHours } from './1.minutes-to-hours';

describe('minutesToHours', () => {
  it('should return the hours for the minutes', () => {
    expect(minutesToHours(0)).toEqual(0);
    expect(minutesToHours(60)).toEqual(1.0);
    expect(minutesToHours(33)).toEqual(0.55);
  });

  it('should throw exception when minutes is negative number', () => {
    expect(() => minutesToHours(-2)).toThrow('Minutes cannot be negative');
  });
});
