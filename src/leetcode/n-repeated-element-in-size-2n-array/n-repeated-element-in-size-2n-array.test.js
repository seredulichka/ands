import { nRepeatedElementInSize2nArray } from './n-repeated-element-in-size-2n-array';
describe('[Leetcode] n-repeated-element-in-size-2n-array', () => {
	test('example #1', () => {
	expect(
		nRepeatedElementInSize2nArray([1,2,3,3])
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		nRepeatedElementInSize2nArray([2,1,2,5,3,2])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		nRepeatedElementInSize2nArray([5,1,5,2,5,3,5,4])
	).toBe(5);
	});
});