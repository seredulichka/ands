/**
 * Leetcode #1534
 * Difficulty: Easy
 * https://leetcode.com/problems/count-good-triplets/
 */
export const countGoodTriplets = (arr, a, b, c) => {
  let counter = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const f = arr[i];

    for (let j = i + 1; j < arr.length; j += 1) {
      const s = arr[j];
      if (Math.abs(f - s) > a) continue;

      for (let k = j + 1; k < arr.length; k += 1) {
        const t = arr[k];
        if (Math.abs(s - t) <= b && Math.abs(f - t) <= c) {
          counter += 1;
        }
      }
    }
  }
  return counter;
};
