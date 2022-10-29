import { fizzBuzz } from './fizz-buzz';
describe('[Leetcode] fizz-buzz', () => {
	test('example #1', () => {
	expect(
		fizzBuzz(3)
	).toStrictEqual(["1","2","Fizz"]);
	});

	test('example #2', () => {
	expect(
		fizzBuzz(5)
	).toStrictEqual(["1","2","Fizz","4","Buzz"]);
	});

	test('example #3', () => {
	expect(
		fizzBuzz(15)
	).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
	});
});