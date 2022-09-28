import { sortThePeople } from './sort-the-people';
describe('[Leetcode] sort-the-people', () => {
	test('example #1', () => {
	expect(
		sortThePeople(["Mary","John","Emma"], [180,165,170])
	).toStrictEqual(["Mary","Emma","John"]);
	});

	test('example #2', () => {
	expect(
		sortThePeople(["Alice","Bob","Bob"], [155,185,150])
	).toStrictEqual(["Bob","Alice","Bob"]);
	});
});