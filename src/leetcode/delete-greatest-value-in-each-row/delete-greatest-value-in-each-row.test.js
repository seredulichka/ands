import { deleteGreatestValueInEachRow } from './delete-greatest-value-in-each-row';
describe('[Leetcode] delete-greatest-value-in-each-row', () => {
	test('example #1', () => {
	expect(
		deleteGreatestValueInEachRow([[1,2,4],[3,3,1]])
	).toBe(8);
	});

	test('example #2', () => {
	expect(
		deleteGreatestValueInEachRow([[10]])
	).toBe(10);
	});
});