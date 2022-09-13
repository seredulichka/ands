import { twoFurthestHousesWithDifferentColors } from './two-furthest-houses-with-different-colors';
describe('[Leetcode] two-furthest-houses-with-different-colors', () => {
	test('example #1', () => {
	expect(
		twoFurthestHousesWithDifferentColors([1,1,1,6,1,1,1])
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		twoFurthestHousesWithDifferentColors([1,8,3,8,3])
	).toBe(4);
	});

	test('example #3', () => {
	expect(
		twoFurthestHousesWithDifferentColors([0,1])
	).toBe(1);
	});
});