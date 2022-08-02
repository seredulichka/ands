const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	heading:{
		type: 'string',
		alias: 'h',
		default: 'new-folder',
		desc: 'What is the name?'
	},
	number:{
		type: 'string',
		alias: 'n',
		default: '000',
		desc: 'What is the number?'
	},
	difficulty:{
		type: 'string',
		alias: 'd',
		default: 'e',
		desc: 'What is difficulty?'
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `init`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
