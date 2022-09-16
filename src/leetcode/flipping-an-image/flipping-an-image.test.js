import { flippingAnImage } from './flipping-an-image';
describe('[Leetcode] flipping-an-image', () => {
	test('example #1', () => {
	expect(
		flippingAnImage([[1,1,0],[1,0,1],[0,0,0]])
	).toStrictEqual([[1,0,0],[0,1,0],[1,1,1]]);
	});

	test('example #2', () => {
	expect(
		flippingAnImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])
	).toStrictEqual([[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]);
	});
});