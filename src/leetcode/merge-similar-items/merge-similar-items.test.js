import { mergeSimilarItems } from './merge-similar-items';
describe('[Leetcode] merge-similar-items', () => {
	test('example #1', () => {
	expect(
		mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]])
	).toStrictEqual([[1,6],[3,9],[4,5]]);
	});
	
	test('example #2', () => {
	expect(
		mergeSimilarItems([[1,1],[3,2],[2,3]], [[2,1],[3,2],[1,3]])
	).toStrictEqual([[1,4],[2,4],[3,4]]);
	});

	test('example #3', () => {
	expect(
		mergeSimilarItems([[1,3],[2,2]], [[7,1],[2,2],[1,4]])
	).toStrictEqual([[1,7],[2,4],[7,1]]);
	});
});