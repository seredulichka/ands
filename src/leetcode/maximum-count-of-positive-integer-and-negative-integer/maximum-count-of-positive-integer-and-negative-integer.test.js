import { maximumCountOfPositiveIntegerAndNegativeInteger } from './maximum-count-of-positive-integer-and-negative-integer';
describe('[Leetcode] maximum-count-of-positive-integer-and-negative-integer', () => {
	test('example #1', () => {
	expect(
		maximumCountOfPositiveIntegerAndNegativeInteger([-2,-1,-1,1,2,3])
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		maximumCountOfPositiveIntegerAndNegativeInteger([-3,-2,-1,0,0,1,2])
	).toBe(3);
	});

	test('example #3', () => {
	expect(
		maximumCountOfPositiveIntegerAndNegativeInteger([5,20,66,1314])
	).toBe(4);
	});
});