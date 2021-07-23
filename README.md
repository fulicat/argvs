
# argvs

> parse process.argv.

## Installation

### Node.js

`argvs` is available on [npm](http://npmjs.org) or [yarn](https://yarnpkg.com).

    $ npm install argvs --save-dev

    $ yarn add argvs --dev

## Usage

### test.js
```js
  const { argv } = require('argvs');
  console.log('\nargvs:\n')
  console.log(argv)
```

### run

```js
  $ node test.js --env=development conf=dev mode:prod --open
```

### result

```js
  {
    env: 'development',
    conf: 'dev',
    mode: 'prod',
    open: true
  }
```


## Test

```js
    $ npm run test
    $ yarn test
```


## package.json

```js
  {
    "name": "argvs",
    "version": "1.0.0",
    "description": "parse command line arguments",
    "main": "index.js",
    "scripts": {
      "test": "node test --env=development conf=dev mode:prod --open"
    }
  }
```




## License

(The MIT License)

Copyright (c) 2019 Jack.Chan <fulicat@qq.com> (http://fulicat.com)

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
