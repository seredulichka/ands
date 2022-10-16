import { squaresOfASortedArray } from './squares-of-a-sorted-array';
describe('[Leetcode] squares-of-a-sorted-array', () => {
	test('example #1', () => {
	expect(
		squaresOfASortedArray([-4,-1,0,3,10])
	).toStrictEqual([0,1,9,16,100]);
	});

	test('example #2', () => {
	expect(
		squaresOfASortedArray([-7,-3,2,3,11])
	).toStrictEqual([4,9,9,49,121]);
	});
});