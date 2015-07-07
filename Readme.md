
# mind-currency
[![NPM version][npm-image]][npm-url]
[![build status][circle-image]][circle-url]
[![license][license-image]][license-url]

A currency transform for Mind

## Installation

    $ npm install mind-currency

## Usage

```js
var currency = require('mind-currency');
var Mind = require('node-mind');

var mind = Mind()
  .use(currency)
  .learn([
    { input: [ '$0', '$0' ], output: [ '$0' ] },
    { input: [ '$0', '$1' ], output: [ '$1' ] },
    { input: [ '$1', '$0' ], output: [ '$1' ] },
    { input: [ '$1', '$1' ], output: [ '$0' ] }
  ]);
```

## License

[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/mind-currency.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mind-currency
[circle-image]: https://img.shields.io/circleci/project/stevenmiller888/mind-currency.svg
[circle-url]: https://circleci.com/gh/stevenmiller888/mind-currency
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://tldrlegal.com/license/mit-license