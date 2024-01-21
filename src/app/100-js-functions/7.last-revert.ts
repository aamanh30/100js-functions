/**
 * Write a function named lastNRevert that receives 2 parameters:
 * a string named text
 * a number - n
 * and returns the last n characters of text but in reverse order.
 */

export const lastRevert = (
  text: string,
  numOfCharsToRevert: number
): string => {
  if (numOfCharsToRevert < 0) {
    throw new Error('Number of characters to revert is not valid');
  }
  if (numOfCharsToRevert > text.length) {
    throw new Error(
      'Number of characters to revert cannot be greater the the length of string'
    );
  }

  return text.split('').reverse().splice(0, numOfCharsToRevert).join('');
};
