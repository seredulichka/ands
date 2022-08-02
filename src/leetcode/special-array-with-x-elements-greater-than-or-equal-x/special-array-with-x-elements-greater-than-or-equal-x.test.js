import { specialArrayWithXElementsGreaterThanOrEqualX } from './special-array-with-x-elements-greater-than-or-equal-x';
describe('[Leetcode] special-array-with-x-elements-greater-than-or-equal-x', () => {
	test('example #1', () => {
	expect(
		specialArrayWithXElementsGreaterThanOrEqualX([3,5])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		specialArrayWithXElementsGreaterThanOrEqualX([0,0])
	).toBe(-1);
	});

	test('example #2', () => {
	expect(
		specialArrayWithXElementsGreaterThanOrEqualX([0,4,3,0,4])
	).toBe(3);
	});
});