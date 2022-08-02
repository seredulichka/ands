import { rangeSumOfBst } from './range-sum-of-bst';
import { createTree } from '../../utils/node';

describe('[Leetcode] range-sum-of-bst', () => {
	test('example #1', () => {
	expect(
		rangeSumOfBst(createTree([10,5,15,3,7,null,18]), 7, 15)
	).toBe(32);
	});

	test('example #2', () => {
	expect(
		rangeSumOfBst(createTree([10,5,15,3,7,13,18,1,null,6]), 6, 10)
	).toBe(23);
	});
});