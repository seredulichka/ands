import { capitalizeTheTitle } from './capitalize-the-title';
describe('[Leetcode] capitalize-the-title', () => {
	test('example #1', () => {
	expect(
		capitalizeTheTitle("capiTalIze tHe titLe")
	).toBe("Capitalize The Title");
	});

	test('example #2', () => {
	expect(
		capitalizeTheTitle("First leTTeR of EACH Word")
	).toBe("First Letter of Each Word");
	});

	test('example #3', () => {
	expect(
		capitalizeTheTitle("i lOve leetcode")
	).toBe("i Love Leetcode");
	});
});