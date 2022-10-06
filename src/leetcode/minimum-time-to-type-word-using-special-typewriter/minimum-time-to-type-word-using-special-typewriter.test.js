import { minimumTimeToTypeWordUsingSpecialTypewriter } from './minimum-time-to-type-word-using-special-typewriter';
describe('[Leetcode] minimum-time-to-type-word-using-special-typewriter', () => {
	test('example #1', () => {
	expect(
		minimumTimeToTypeWordUsingSpecialTypewriter("abc")
	).toBe(5);
	});

	test('example #2', () => {
	expect(
		minimumTimeToTypeWordUsingSpecialTypewriter("bza")
	).toBe(7);
	});

	test('example #3', () => {
	expect(
		minimumTimeToTypeWordUsingSpecialTypewriter("zjpc")
	).toBe(34);
	});
});