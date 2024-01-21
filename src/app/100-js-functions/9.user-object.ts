/**
 * Write a function named toUserObject that receives 3 parameters:
 * a string named firstName
 * a string named lastName
 * a number named age
 * and returns an object representing an user, with the properties name and age.
 */

import { User } from '../models/user';

export const toUserObject = (
  firstName: string,
  lastName: string,
  age: number
): User => ({
  name: `${firstName} ${lastName}`.trim(),
  age
});
