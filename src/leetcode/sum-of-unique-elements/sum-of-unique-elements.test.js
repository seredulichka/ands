import { sumOfUniqueElements } from './sum-of-unique-elements';
describe('[Leetcode] sum-of-unique-elements', () => {
	test('example #1', () => {
	expect(
		sumOfUniqueElements([1,2,3,2])
	).toBe(4);
	});

	test('example #2', () => {
	expect(
		sumOfUniqueElements([1,1,1,1,1])
	).toBe(0);
	});

	test('example #3', () => {
	expect(
		sumOfUniqueElements([1,2,3,4,5])
	).toBe(15);
	});
});