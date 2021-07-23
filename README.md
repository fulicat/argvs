
# argvs

> parse command line arguments of process.argv

## Installation

### Node.js

`argvs` is available on [npm](http://npmjs.org) or [yarn](https://yarnpkg.com).

```bash
$ yarn add argvs --dev
or
$ npm install argvs --save-dev
```



## Usage

### test.js
```js
const { argv } = require('argvs');
console.log('\nargvs:\n')
console.log(argv)
```

### run

```bash
$ node test.js -x 3 4 -y 4 -n556 -abc --beep=boop foo bar baz --test -t ab=dc -X 0.25 -Y 0.7 -q a b c
```

### result

```js
{
  _: [ 'foo', 'bar', 'baz' ],
  beep: 'boop',
  test: true,
  ab: 'dc',
  x: [ 3, 4 ],
  y: 4,
  n: [ 5, 5, 6 ],
  a: true,
  b: true,
  c: true,
  t: true,
  X: 0.25,
  Y: 0.7,
  q: [ 'a', 'b', 'c' ]
}
```



--------------------------------------------------------






## package.json

```json
{
    "name": "argvs",
    "version": "1.2.0",
    "description": "parse command line arguments of process.argv",
    "main": "index.js",
    "scripts": {
      "test": "node test -x 3 4 -y 4 -n556 -abc --beep=boop foo bar baz --test -t ab=dc -X 0.25 -Y 0.7 -q a b c"
    }
}
```



## Test

```bash
$ yarn test
or
$ npm run test
```






## License

(The MIT License)

Copyright (c) 2019~2021 Jack.Chan <fulicat@qq.com> (http://fulicat.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
