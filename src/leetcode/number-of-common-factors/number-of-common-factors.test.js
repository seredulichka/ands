import { numberOfCommonFactors } from './number-of-common-factors';
describe('[Leetcode] number-of-common-factors', () => {
	test('example #1', () => {
	expect(
		numberOfCommonFactors(12, 6)
	).toBe(4);
	});

	test('example #2', () => {
	expect(
		numberOfCommonFactors(25, 30)
	).toBe(2);
	});
});