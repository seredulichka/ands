import { largestLocalValuesInAMatrix } from './largest-local-values-in-a-matrix';
describe('[Leetcode] largest-local-values-in-a-matrix', () => {
	test('example #1', () => {
	expect(
		largestLocalValuesInAMatrix([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]])
	).toStrictEqual([[9,9],[8,6]]);
	});

	test('example #2', () => {
	expect(
		largestLocalValuesInAMatrix([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]])
	).toStrictEqual([[2,2,2],[2,2,2],[2,2,2]]);
	});
});