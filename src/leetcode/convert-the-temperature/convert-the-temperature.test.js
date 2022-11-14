import { convertTheTemperature } from './convert-the-temperature';
describe('[Leetcode] convert-the-temperature', () => {
	test('example #1', () => {
	expect(
		convertTheTemperature(36.50)
	).toStrictEqual(["309.65000","97.70000"]);
	});

	test('example #2', () => {
	expect(
		convertTheTemperature(122.11)
	).toStrictEqual(["395.26000","251.79800"]);
	});
});