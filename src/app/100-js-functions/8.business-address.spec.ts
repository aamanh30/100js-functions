import { toBusinessAddress } from './8.business-address';

describe('toBusinessAddress', () => {
  it('should return the business address', () => {
    expect(
      toBusinessAddress({
        address: { number: 3, zipCode: 100, street: '' },
        name: 'address name'
      })
    ).toEqual(', number 3, 100');

    expect(
      toBusinessAddress({
        address: { number: 7, zipCode: 123, street: 'street name' },
        name: 'address name'
      })
    ).toEqual('street name, number 7, 123');
  });
});
