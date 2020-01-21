const path = require("path")
const test = require("ava")
const fs = require("fs-extra")
const webpack = require(".")

test("main", async (t) => {
	await webpack({
		entry: path.resolve(__dirname, "fixtures", "entry.js"),
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "entry.js",
		},
	})
	t.snapshot(await fs.readFile("dist/entry.js", "utf8"))
})
