/*
* argvs.js
* @Author: Jack.Chan
* @Date:   2021-07-23 15:58:31
* @Last Modified by:   Jack.Chan
* @Last Modified time: 2021-07-23 16:00:12
*/

/*

>node test.js  -x 3 4 -y 4 -n556 -abc --beep=boop foo bar baz --test -t ab=dc -X 0.25 -Y 0.7 -q a b c

*/


const isNumber = function(s) {
	return typeof(Number(s)) === 'number' && isNaN(s) === false;
}

const parseValue = function(value) {
	if (value !== undefined) {
		if (value === 'true') {
			return true;
		}
		if (value === 'false') {
			return false;
		}
		if (isNumber(value)) {
			return Number(value);
		}
	}
	return value;
}

const parseArgvs = function(argv) {
	let result = {_: []};
	if (argv && typeof(argv) === 'object' && argv.length) {
		let key = '', value = '', lastKey = '';
		argv.forEach(function(arg) {
			key = arg.split('=');
			value = key[1];
			key = (key[0] || '').replace(/-/g, '');

			if (arg.indexOf('=') > -1 && key.length) {
				lastKey = '';
				result[key] = arg.startsWith('-') ? (value === undefined ? true : value) : value;
			} else if (arg.startsWith('--') && arg.length > 2) {
				lastKey = '';
				result[key] = true;
			} else if (arg.startsWith('-') && arg.length > 1) {
				if (key.length > 1) {
					let ret = {}, lastK = '';
					key.split('').forEach(function(k) {
						if (isNumber(k)) {
							if (lastK) {
								ret[lastK].push(Number(k));
							}
						} else {
							lastK = '-'+k;
							if (ret[lastK] === undefined) {
								ret[lastK] = []
							}
						}
					})
					Object.assign(result, ret);
				} else {
					lastKey = arg; // rawKey with dashes
					if (!result[lastKey]) {
						result[lastKey] = []
					}
				}
			} else {
				arg = parseValue(arg);
				if (lastKey) {
					result[lastKey].push(arg);
				} else {
					result['_'].push(arg);
				}
			}
		})

		key = '', value = '';
		Object.keys(result).forEach(function(itemKey) {
			if (itemKey.startsWith('-') && typeof(result[itemKey]) === 'object') {
				key = itemKey.replace(/-/g, '');
				if (result[itemKey].length === 0) {
					result[key] = true;
				} else if (result[itemKey].length === 1) {
					value = result[itemKey].join('');
					value = parseValue(value);
					result[key] = value;
				} else {
					result[key] = result[itemKey];
				}
				delete result[itemKey];
			}
		})
	}
	return result;
}

const argvs = parseArgvs(process.argv.slice(2));

module.exports = {
	argvs,
	argv: argvs,
	parseArgvs,
	isNumber
}