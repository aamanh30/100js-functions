import { lastRevert } from './7.last-revert';

describe('lastRevert', () => {
  it('should return the gasoline amount', () => {
    expect(lastRevert('', 0)).toEqual('');
    expect(lastRevert('t-shirts', 4)).toEqual('stri');
    expect(lastRevert('hello world', 11)).toEqual('dlrow olleh');
  });

  it('should throw exception when number of characters is invalid', () => {
    expect(() => lastRevert('hello world', -2)).toThrow(
      'Number of characters to revert is not valid'
    );
  });

  it('should throw exception when number of characters is greater than string length', () => {
    expect(() => lastRevert('hello world', 12)).toThrow(
      'Number of characters to revert cannot be greater the the length of string'
    );
  });
});
