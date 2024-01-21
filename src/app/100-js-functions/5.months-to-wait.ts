/**
 * Write a function name monthsToWait that receives 2 numbers as parameters,
 * representing the index of two months. The function should return the number of months
 * we have to wait, to get from the first month to the second one.
 */

export const monthsToWait = (startMonth: number, endMonth: number) => {
  if (startMonth < 0 || startMonth > 11) {
    throw new Error('Start month is not valid');
  }
  if (endMonth < 0 || endMonth > 11) {
    throw new Error('End month is not valid');
  }
  if (startMonth <= endMonth) {
    return endMonth - startMonth;
  }

  return 12 - startMonth + endMonth;
};
