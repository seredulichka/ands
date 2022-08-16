/**
 * Leetcode #1688
 * Difficulty: Easy
 * https://leetcode.com/problems/count-of-matches-in-tournament/
 */
export const countOfMatchesInTournament = n => {
  let matches = 0;

  for (let i = 0; n > 1; i++) {
    matches += Math.floor(n / 2);
    n = Math.round(n / 2);
  }

  return matches;
};
