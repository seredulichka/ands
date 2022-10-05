import { heightChecker } from './height-checker';
describe('[Leetcode] height-checker', () => {
	test('example #1', () => {
	expect(
		heightChecker([1,1,4,2,1,3])
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		heightChecker([5,1,2,3,4])
	).toBe(5);
	});

	test('example #2', () => {
	expect(
		heightChecker([1,2,3,4,5])
	).toBe(0);
	});
});