import { numberOfStudentsUnableToEatLunch } from './number-of-students-unable-to-eat-lunch';
describe('[Leetcode] number-of-students-unable-to-eat-lunch', () => {
	test('example #1', () => {
	expect(
		numberOfStudentsUnableToEatLunch([1,1,0,0], [0,1,0,1])
	).toBe(0);
	});

	test('example #2', () => {
	expect(
		numberOfStudentsUnableToEatLunch([1,1,1,0,0,1], [1,0,0,0,1,1])
	).toBe(3);
	});
});