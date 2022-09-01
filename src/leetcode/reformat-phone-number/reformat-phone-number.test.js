import { reformatPhoneNumber } from './reformat-phone-number';
describe('[Leetcode] reformat-phone-number', () => {
	test('example #1', () => {
	expect(
		reformatPhoneNumber("1-23-45 6")
	).toBe("123-456");
	});
	
	test('example #2', () => {
	expect(
		reformatPhoneNumber("123 4-567")
	).toBe("123-45-67");
	});

	test('example #3', () => {
	expect(
		reformatPhoneNumber("123 4-5678")
	).toBe("123-456-78");
	});
});