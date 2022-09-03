import { destinationCity } from './destination-city';
describe('[Leetcode] destination-city', () => {
	test('example #1', () => {
	expect(
		destinationCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])
	).toBe("Sao Paulo");
	});

	test('example #2', () => {
	expect(
		destinationCity([["B","C"],["D","B"],["C","A"]])
	).toBe("A");
	});

	test('example #3', () => {
	expect(
		destinationCity([["jMgaf WaWA","iinynVdmBz"],[" QCrEFBcAw","wRPRHznLWS"],["iinynVdmBz","OoLjlLFzjz"],["OoLjlLFzjz"," QCrEFBcAw"],["IhxjNbDeXk","jMgaf WaWA"],["jmuAYy vgz","IhxjNbDeXk"]])
	).toBe("wRPRHznLWS");
	});
});