/**
 * Write a function named canDriveCar that receives 2 parameters:
 * an object named user
 * an object named car
 * and returns a boolean indicating if the user can drive the car or not.
 *
 * Note:
 * anybody can drive a car if it has at least 18 years old or
 * if the car has an engine smaller than 1000cc.
 */

import { Car } from '../models/car';
import { User } from '../models/user';

export const canDriveCar = ({ age }: User, { engineSize }: Car): boolean =>
  age >= 18 || engineSize <= 1000;
