import { countSquareSumTriples } from './count-square-sum-triples';
describe('[Leetcode] count-square-sum-triples', () => {
	test('example #1', () => {
	expect(
		countSquareSumTriples(5)
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		countSquareSumTriples(10)
	).toBe(4);
	});
});