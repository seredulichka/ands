import { deleteColumnsToMakeSorted } from './delete-columns-to-make-sorted';
describe('[Leetcode] delete-columns-to-make-sorted', () => {
	test('example #1', () => {
	expect(
		deleteColumnsToMakeSorted(["cba","daf","ghi"])
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		deleteColumnsToMakeSorted(["a","b"])
	).toBe(0);
	});

	test('example #2', () => {
	expect(
		deleteColumnsToMakeSorted(["zyx","wvu","tsr"])
	).toBe(3);
	});
});