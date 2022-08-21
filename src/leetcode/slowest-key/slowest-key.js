/**
 * Leetcode #1629
 * Difficulty: Easy
 * https://leetcode.com/problems/slowest-key/
 */
export const slowestKey = (releaseTimes, keysPressed) => {
  let max = 0;
  let key = keysPressed[0];

  for (let i = 0; i < releaseTimes.length; i += 1) {
    const dur = releaseTimes[i] - (releaseTimes[i - 1] ?? 0);

    if (dur > max || (dur === max && keysPressed[i] > key)) {
      max = dur;
      key = keysPressed[i];
    }
  }

  return key;
};
