/**
 * Write a function named averageOfNumbers that receives n numbers as parameters and
 * returns the mathematical average between them.
 */

export const averageOfNumbers = (...numbers: number[]) => {
  if (!numbers.length) {
    throw new Error('No number found to compute the average');
  }

  return numbers.reduce((total, num) => total + num, 0) / numbers.length;
};
