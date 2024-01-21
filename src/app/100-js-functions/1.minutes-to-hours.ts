/**
 * Write a function named minutesToHours that receives a number of minutes as parameter
 * and returns a number representing the same amount of time but in hours.
 */
export const minutesToHours = (minutes: number): number => {
  if (minutes < 0) {
    throw new Error('Minutes cannot be negative');
  }

  return minutes / 60;
};
