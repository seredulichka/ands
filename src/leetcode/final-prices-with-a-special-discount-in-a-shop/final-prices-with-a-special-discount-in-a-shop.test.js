import { finalPricesWithASpecialDiscountInAShop } from './final-prices-with-a-special-discount-in-a-shop';
describe('[Leetcode] final-prices-with-a-special-discount-in-a-shop', () => {
	test('example #1', () => {
	expect(
		finalPricesWithASpecialDiscountInAShop([8,4,6,2,3])
	).toStrictEqual([4,2,4,2,3]);
	});

	test('example #2', () => {
	expect(
		finalPricesWithASpecialDiscountInAShop([1,2,3,4,5])
	).toStrictEqual([1,2,3,4,5]);
	});

	test('example #3', () => {
	expect(
		finalPricesWithASpecialDiscountInAShop([10,1,1,6])
	).toStrictEqual([9,0,1,6]);
	});
});