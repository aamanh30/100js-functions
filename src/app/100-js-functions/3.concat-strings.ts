/**
 * Write a function named concatStrings that receives n strings as parameters and an additional string named separator.
 * The function should concatenate the three strings using the provided separator and return the result.
 */

export const concatStrings = (
  separator: string,
  ...strings: string[]
): string => strings.join(separator);
