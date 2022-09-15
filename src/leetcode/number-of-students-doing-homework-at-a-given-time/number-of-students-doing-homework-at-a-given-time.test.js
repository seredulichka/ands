import { numberOfStudentsDoingHomeworkAtAGivenTime } from './number-of-students-doing-homework-at-a-given-time';
describe('[Leetcode] number-of-students-doing-homework-at-a-given-time', () => {
	test('example #1', () => {
	expect(
		numberOfStudentsDoingHomeworkAtAGivenTime([1,2,3], [3,2,7], 4)
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		numberOfStudentsDoingHomeworkAtAGivenTime([4], [4], 4)
	).toBe(1);
	});
});