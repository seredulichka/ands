import { uniqueEmailAddresses } from './unique-email-addresses';
describe('[Leetcode] unique-email-addresses', () => {
	test('example #1', () => {
	expect(
		uniqueEmailAddresses(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		uniqueEmailAddresses(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])
	).toBe(3);
	});
});