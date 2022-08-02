import { xorOperationInAnArray } from './xor-operation-in-an-array';
describe('[Leetcode] xor-operation-in-an-array', () => {
	test('example #1', () => {
	expect(
		xorOperationInAnArray(5, 0)
	).toBe(8);
	});

	test('example #2', () => {
	expect(
		xorOperationInAnArray(4, 3)
	).toBe(8);
	});
});