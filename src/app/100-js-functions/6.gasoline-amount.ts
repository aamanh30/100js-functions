/**
 * You're driving to a new city for a small weekend trip.
 * Write a function named gasolineAmount that receives 2 numbers as parameters:
 * the number of kilometers to your destination
 * average consumption of liters per 100km
 * The function should return the amount of gasoline needed to complete the entire round-trip.
 */
export const gasolineAmount = (
  distanceInKms: number,
  averageConsumptionPer100Km: number
): number => {
  if (distanceInKms <= 0) {
    throw new Error('Distance is not valid');
  }
  if (averageConsumptionPer100Km <= 0) {
    throw new Error('Average consumption is not valid');
  }

  return (distanceInKms * averageConsumptionPer100Km) / 50; //2 * ((distanceInKms * averageConsumptionPer100Km) / 100);
};
