/**
 * Write a function named businessAddress that receives an Object representing a business as a parameter,
 * and returns a string representation of the it's address.
 */

import { Business } from '../models/business';

export const toBusinessAddress = ({ address }: Business): string =>
  `${address.street}, number ${address.number}, ${address.zipCode}`;
