import { alphabetBoardPath } from './alphabet-board-path';
describe('[Leetcode] alphabet-board-path', () => {
	test('example #1', () => {
	expect(
		alphabetBoardPath("leet")
	).toBe("RDD!RRRUU!!DDD!");
	});

	test('example #2', () => {
	expect(
		alphabetBoardPath("code")
	).toBe("RR!RRDD!LUU!R!");
	});

	test('example #2', () => {
	expect(
		alphabetBoardPath("zb")
	).toBe("DDDDD!UUUUUR!");
	});
});