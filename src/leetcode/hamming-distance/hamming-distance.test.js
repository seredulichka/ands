import { hammingDistance } from './hamming-distance';
describe('[Leetcode] hamming-distance', () => {
	test('example #1', () => {
	expect(
		hammingDistance(1, 4)
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		hammingDistance(3, 1)
	).toBe(1);
	});
});