import { maximumNumberOfPairsInArray } from './maximum-number-of-pairs-in-array';
describe('[Leetcode] maximum-number-of-pairs-in-array', () => {
	test('example #1', () => {
	expect(
		maximumNumberOfPairsInArray([1,3,2,1,3,2,2])
	).toStrictEqual([3,1]);
	});

	test('example #2', () => {
	expect(
		maximumNumberOfPairsInArray([1,1])
	).toStrictEqual([1,0]);
	});

	test('example #3', () => {
	expect(
		maximumNumberOfPairsInArray([0])
	).toStrictEqual([0, 1]);
	});
});