/**
 * Leetcode #2037
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
 */
export const minimumNumberOfMovesToSeatEveryone = (seats, students) => {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  return seats.reduce((acc, current, i) => (acc += Math.abs(current - students[i])), 0);
};
