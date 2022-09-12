import { replaceElementsWithGreatestElementOnRightSide } from './replace-elements-with-greatest-element-on-right-side';
describe('[Leetcode] replace-elements-with-greatest-element-on-right-side', () => {
	test('example #1', () => {
	expect(
		replaceElementsWithGreatestElementOnRightSide([17,18,5,4,6,1])
	).toStrictEqual([18,6,6,6,1,-1]);
	});

	test('example #2', () => {
	expect(
		replaceElementsWithGreatestElementOnRightSide([400])
	).toStrictEqual([-1]);
	});
});