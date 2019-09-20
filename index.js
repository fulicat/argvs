/*
* argvs.js
* @Author: Jack.Chan (971546@qq.com)
* @Date:   2019-09-20 14:06:23
* @Last Modified by:   Jack.Chan
* @Last Modified time: 2019-09-20 19:56:32
* @website http://fulicat.com
* @version v1.0.0
*/

const Argvs = (argv) => {
	argv = argv || process.argv.slice(2);
	let params = {}, tmp = [];
	argv.forEach(item => {
		tmp = []
		if (item.includes('=')) {
			tmp = item.split('=')
		}else if (item.includes(':')) {
			tmp = item.split(':')
		}else if (item.startsWith('--') && item.length > 2) {
			tmp = [item, true]
		}
		if (tmp.length) {
			if (tmp[0].startsWith('--')) {
				tmp[0] = tmp[0].slice(2, tmp[0].length)
			}
			params[tmp[0]] = tmp[1]
		}
	});
	return params;
}

Argvs.argv = Argvs.argvs = Argvs();

module.exports = Argvs;