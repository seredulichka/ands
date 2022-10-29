import { canMakeArithmeticProgressionFromSequence } from './can-make-arithmetic-progression-from-sequence';
describe('[Leetcode] can-make-arithmetic-progression-from-sequence', () => {
	test('example #1', () => {
	expect(
		canMakeArithmeticProgressionFromSequence([3,5,1])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		canMakeArithmeticProgressionFromSequence([1,2,4])
	).toBe(false);
	});
});