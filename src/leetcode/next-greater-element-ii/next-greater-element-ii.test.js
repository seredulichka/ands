import { nextGreaterElementIi } from './next-greater-element-ii';
describe('[Leetcode] next-greater-element-ii', () => {
	test('example #1', () => {
	expect(
		nextGreaterElementIi([1,2,1])
	).toStrictEqual([2,-1,2]);
	});

	test('example #2', () => {
	expect(
		nextGreaterElementIi([1,2,3,4,3])
	).toStrictEqual([2,3,4,-1,4]);
	});

	test('example #2', () => {
	expect(
		nextGreaterElementIi([1,5,3,6,8])
	).toStrictEqual([5,6,6,8,-1]);
	});
});