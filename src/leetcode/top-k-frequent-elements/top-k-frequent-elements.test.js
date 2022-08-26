import { topKFrequentElements } from './top-k-frequent-elements';
describe('[Leetcode] top-k-frequent-elements', () => {
	test('example #1', () => {
	expect(
		topKFrequentElements([1,1,1,2,2,3], 2)
	).toStrictEqual([1,2]);
	});

	test('example #2', () => {
	expect(
		topKFrequentElements([1], 1)
	).toStrictEqual([1]);
	});
});