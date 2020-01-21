"use strict"

const webpack = require("webpack")

class WebpackError extends Error {
	constructor(error, stats) {
		super(error ? "WebpackRuntimeError" : "WebpackCompilationError")

		this.name = "WebpackError"

		this.error = error
		this.stats = stats
	}
}

module.exports = (options) => new Promise((resolve, reject) => webpack(options).run((error, stats) => {
	if (error || stats.hasErrors()) reject(new WebpackError(error, stats))
	else resolve(stats)
}))
