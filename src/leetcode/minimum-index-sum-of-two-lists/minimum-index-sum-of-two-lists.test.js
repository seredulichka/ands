import { minimumIndexSumOfTwoLists } from './minimum-index-sum-of-two-lists';
describe('[Leetcode] minimum-index-sum-of-two-lists', () => {
	test('example #1', () => {
	expect(
		minimumIndexSumOfTwoLists(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])
	).toStrictEqual(["Shogun"]);
	});

	test('example #2', () => {
	expect(
		minimumIndexSumOfTwoLists(["happy","sad","good"], ["sad","happy","good"])
	).toStrictEqual(["sad","happy"]);
	});
});