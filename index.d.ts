import webpack from "webpack"

/**
 * Promise support for Webpack.
 * @param options Options.
 * @example
 * ```
 * const webpack = require("p-webpack");
 *
 * await webpack({
 *		entry: "entry.js",
 *		output: {
 *			filename: "entry.bundle.js"
 *		}
 *	})
 * ```
*/
declare function webpack(options?: webpack.Configuration): Promise<webpack.Stats>;

export = webpack;
