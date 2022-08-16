import { countOfMatchesInTournament } from './count-of-matches-in-tournament';
describe('[Leetcode] count-of-matches-in-tournament', () => {
  test('example #1', () => {
    expect(countOfMatchesInTournament(7)).toBe(6);
  });

  test('example #2', () => {
    expect(countOfMatchesInTournament(14)).toBe(13);
  });
});
