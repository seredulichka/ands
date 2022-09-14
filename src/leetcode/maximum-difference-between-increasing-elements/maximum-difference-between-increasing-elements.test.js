import { maximumDifferenceBetweenIncreasingElements } from './maximum-difference-between-increasing-elements';
describe('[Leetcode] maximum-difference-between-increasing-elements', () => {
	test('example #1', () => {
	expect(
		maximumDifferenceBetweenIncreasingElements([7,1,1,5])	
	).toBe(4);
	});

	test('example #2', () => {
	expect(
		maximumDifferenceBetweenIncreasingElements([9,4,3,2])
	).toBe(-1);
	});

	test('example #3', () => {
	expect(
		maximumDifferenceBetweenIncreasingElements([1,5,2,10])
	).toBe(9);
	});
});