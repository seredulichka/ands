import { averageSalaryExcludingTheMinimumAndMaximumSalary } from './average-salary-excluding-the-minimum-and-maximum-salary';
describe('[Leetcode] average-salary-excluding-the-minimum-and-maximum-salary', () => {
	test('example #1', () => {
	expect(
		averageSalaryExcludingTheMinimumAndMaximumSalary([4000,3000,1000,2000])
	).toBe('2500.00000');
	});

	test('example #2', () => {
	expect(
		averageSalaryExcludingTheMinimumAndMaximumSalary([1000,2000,3000])
	).toBe('2000.00000');
	});
});