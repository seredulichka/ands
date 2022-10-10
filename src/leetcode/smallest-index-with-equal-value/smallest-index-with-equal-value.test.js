import { smallestIndexWithEqualValue } from './smallest-index-with-equal-value';
describe('[Leetcode] smallest-index-with-equal-value', () => {
	test('example #1', () => {
	expect(
		smallestIndexWithEqualValue([0,1,2])
	).toBe(0);
	});

	test('example #2', () => {
	expect(
		smallestIndexWithEqualValue([4,3,2,1])
	).toBe(2);
	});

	test('example #3', () => {
	expect(
		smallestIndexWithEqualValue([1,2,3,4,5,6,7,8,9,0])
	).toBe(-1);
	});

	test('example #4', () => {
	expect(
		smallestIndexWithEqualValue([7,8,3,5,2,6,3,1,1,4,5,4,8,7,2,0,9,9,0,5,7,1,6])
	).toBe(21);
	});
});