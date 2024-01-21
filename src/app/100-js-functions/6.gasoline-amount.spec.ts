import { gasolineAmount } from './6.gasoline-amount';

describe('gasolineAmount', () => {
  it('should return the gasoline amount', () => {
    expect(gasolineAmount(128, 6.4)).toEqual(16.384);
    expect(gasolineAmount(1000, 10)).toEqual(200);
  });

  it('should throw exception when distance not valid', () => {
    expect(() => gasolineAmount(-1, 10)).toThrow('Distance is not valid');
    expect(() => gasolineAmount(0, 10)).toThrow('Distance is not valid');
  });

  it('should throw exception when average consumption is not valid', () => {
    expect(() => gasolineAmount(10, -1)).toThrow(
      'Average consumption is not valid'
    );
    expect(() => gasolineAmount(10, 0)).toThrow(
      'Average consumption is not valid'
    );
  });
});
