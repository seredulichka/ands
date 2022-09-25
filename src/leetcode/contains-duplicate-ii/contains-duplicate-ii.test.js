import { containsDuplicateIi } from './contains-duplicate-ii';
describe('[Leetcode] contains-duplicate-ii', () => {
	test('example #1', () => {
	expect(
		containsDuplicateIi([1,2,3,1], 3)
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		containsDuplicateIi([1,0,1,1], 1)
	).toBe(true);
	});
	
	test('example #3', () => {
	expect(
		containsDuplicateIi([1,2,3,1,2,3], 2)
	).toBe(false);
	});
});