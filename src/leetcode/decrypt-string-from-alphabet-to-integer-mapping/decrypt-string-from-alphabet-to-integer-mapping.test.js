import { decryptStringFromAlphabetToIntegerMapping } from './decrypt-string-from-alphabet-to-integer-mapping';
describe('[Leetcode] decrypt-string-from-alphabet-to-integer-mapping', () => {
	test('example #1', () => {
	expect(
		decryptStringFromAlphabetToIntegerMapping("10#11#12")
	).toBe("jkab");
	});

	test('example #2', () => {
	expect(
		decryptStringFromAlphabetToIntegerMapping("1326#")
	).toBe("acz");
	});
});