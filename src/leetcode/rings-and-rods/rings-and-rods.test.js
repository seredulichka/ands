import { ringsAndRods } from './rings-and-rods';
describe('[Leetcode] rings-and-rods', () => {
	test('example #1', () => {
	expect(
		ringsAndRods("B0B6G0R6R0R6G9")
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		ringsAndRods("B0R0G0R9R0B0G0")
	).toBe(1);
	});

	test('example #3', () => {
	expect(
		ringsAndRods("G4")
	).toBe(0);
	});
});