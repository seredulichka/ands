import { minimumCostOfBuyingCandiesWithDiscount } from './minimum-cost-of-buying-candies-with-discount';
describe('[Leetcode] minimum-cost-of-buying-candies-with-discount', () => {
	test('example #1', () => {
	expect(
		minimumCostOfBuyingCandiesWithDiscount([1,2,3])
	).toBe(5);
	});

	test('example #2', () => {
	expect(
		minimumCostOfBuyingCandiesWithDiscount([6,5,7,9,2,2])
	).toBe(23);
	});

	test('example #3', () => {
	expect(
		minimumCostOfBuyingCandiesWithDiscount([5,5])
	).toBe(10);
	});
});