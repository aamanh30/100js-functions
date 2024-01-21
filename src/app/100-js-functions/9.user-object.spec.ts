import { toUserObject } from './9.user-object';

describe('toUserObject', () => {
  it('should return the user object', () => {
    expect(toUserObject('first name', 'last name', 10)).toEqual({
      name: 'first name last name',
      age: 10
    });

    expect(toUserObject('', 'last name', 10)).toEqual({
      name: 'last name',
      age: 10
    });

    expect(toUserObject('first name', '', 10)).toEqual({
      name: 'first name',
      age: 10
    });
  });
});
