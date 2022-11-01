import { goatLatin } from './goat-latin';
describe('[Leetcode] goat-latin', () => {
	test('example #1', () => {
	expect(
		goatLatin("Each word consists of lowercase and uppercase letters only")
	).toBe("Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa");
	});

	test('example #2', () => {
	expect(
		goatLatin("The quick brown fox jumped over the lazy dog")
	).toBe("heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa");
	});
});