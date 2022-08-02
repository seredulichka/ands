import { decodeXoredArray } from './decode-xored-array';
describe('[Leetcode] decode-xored-array', () => {
	test('example #1', () => {
	expect(
		decodeXoredArray([1,2,3], 1)
	).toStrictEqual([1,0,2,1]);
	});

	test('example #2', () => {
	expect(
		decodeXoredArray([6,2,7,3], 4)
	).toStrictEqual([4,2,0,7,4]);
	});
});