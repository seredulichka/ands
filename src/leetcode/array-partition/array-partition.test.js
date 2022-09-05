import { arrayPartition } from './array-partition';
describe('[Leetcode] array-partition', () => {
	test('example #1', () => {
	expect(
		arrayPartition([1,4,3,2])
	).toBe(4);
	});

	test('example #2', () => {
	expect(
		arrayPartition([6,2,6,5,1,2])
	).toBe(9);
	});
});