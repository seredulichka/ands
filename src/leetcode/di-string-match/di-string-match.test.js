import { diStringMatch } from './di-string-match';
describe('[Leetcode] di-string-match', () => {
	test('example #1', () => {
	expect(
		diStringMatch("IDID")
	).toStrictEqual([0,4,1,3,2]);
	});

	test('example #2', () => {
	expect(
		diStringMatch("III")
	).toStrictEqual([0,1,2,3]);
	});

	test('example #3', () => {
	expect(
		diStringMatch("DDI")
	).toStrictEqual([3,2,0,1]);
	});
});