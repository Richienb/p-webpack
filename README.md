# Promise Webpack [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/p-webpack/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/p-webpack)

Promise support for [Webpack](https://github.com/webpack/webpack).

[![NPM Badge](https://nodei.co/npm/p-webpack.png)](https://npmjs.com/package/p-webpack)

## Install

```sh
npm install p-webpack webpack
```

## Usage

```js
const webpack = require("p-webpack");

await webpack({
	entry: "entry.js",
	output: {
		filename: "entry.bundle.js"
	}
})
```

## API

### webpack(options?)

#### options

Type: `object`

See https://webpack.js.org/configuration/#options
