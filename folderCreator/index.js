#!/usr/bin/env node

/**
 * folderCreator
 * create new folder with files
 *
 * @author Wednesday <https://github.com/seredulichka>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const fs = require('fs');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const camalize = (str) => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const content = (name, number, difficulty) => {
	const getDifficulty = (value) => {
		switch (value) {
			case 'h':
			case 'H':
				return 'Hard'
			case 'm':
			case 'M':
				return 'Medium'
			default:
				return 'Easy'
		  }
	}
	
	  
	return(
`/**
* Leetcode #${number}
* Difficulty: ${getDifficulty(difficulty)}
* https://leetcode.com/problems/${name}/
*/
export const ${camalize(name)} = () => {
	
};`
	)
}

const contentTest = (name) => {
	const nameCamelCase = camalize(name)

	return(
`import { ${nameCamelCase} } from './${name}';
describe('[Leetcode] ${name}', () => {
	test('example #1', () => {
	expect(
		${nameCamelCase}()
	).toBe("");
	});

	test('example #2', () => {
	expect(
		${nameCamelCase}()
	).toBe("");
	});
});`
	)
}


(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
	if(input.includes('init')){
		const dir = `../src/leetcode/${flags.heading}`
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, {
				recursive: true
			});
			fs.writeFile(`${dir}/${flags.heading}.js`, content(flags.heading, flags.number, flags.difficulty), function (err) {
				if (err) throw err;
				console.log('The work file is created successfully.');
			});
			fs.writeFile(`${dir}/${flags.heading}.test.js`, contentTest(flags.heading), function (err) {
				if (err) throw err;
				console.log('The test file is created successfully.');
			});
		} else {
			console.log('Folder with the same name already exist.');
		}
	}

})();
