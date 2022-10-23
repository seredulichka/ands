import { nextGreaterElement } from './next-greater-element';
describe('[Leetcode] next-greater-element', () => {
	test('example #1', () => {
	expect(
		nextGreaterElement([4,1,2], [1,3,4,2])
	).toStrictEqual([-1,3,-1]);
	});

	test('example #2', () => {
	expect(
		nextGreaterElement([2,4], [1,2,3,4])
	).toStrictEqual([3,-1]);
	});
});