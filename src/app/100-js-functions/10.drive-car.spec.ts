import { canDriveCar } from './10.drive-car';

describe('canDriveCar', () => {
  it('should return true user and car are valid', () => {
    expect(
      canDriveCar(
        {
          age: 18,
          name: 'some name'
        },
        {
          engineSize: 1000,
          name: 'car name'
        }
      )
    ).toEqual(true);

    expect(
      canDriveCar(
        {
          age: 17,
          name: 'some name'
        },
        {
          engineSize: 1000,
          name: 'car name'
        }
      )
    ).toEqual(true);

    expect(
      canDriveCar(
        {
          age: 18,
          name: 'some name'
        },
        {
          engineSize: 1001,
          name: 'car name'
        }
      )
    ).toEqual(true);
  });

  it('should return false when user is under age and car engine is above permitted limit', () => {
    expect(
      canDriveCar(
        {
          age: 17,
          name: 'some name'
        },
        {
          engineSize: 1001,
          name: 'car name'
        }
      )
    ).toEqual(false);
  });
});
