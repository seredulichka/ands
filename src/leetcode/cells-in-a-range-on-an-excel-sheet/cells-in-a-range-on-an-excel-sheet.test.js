import { cellsInARangeOnAnExcelSheet } from './cells-in-a-range-on-an-excel-sheet';
describe('[Leetcode] cells-in-a-range-on-an-excel-sheet', () => {
	test('example #1', () => {
	expect(
		cellsInARangeOnAnExcelSheet("K1:L2")
	).toStrictEqual(["K1","K2","L1","L2"]);
	});

	test('example #2', () => {
	expect(
		cellsInARangeOnAnExcelSheet("A1:F1")
	).toStrictEqual(["A1","B1","C1","D1","E1","F1"]);
	});
});