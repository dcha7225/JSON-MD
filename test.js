let parser = require('json-schema-to-markdown')
let fs = require('fs')
let test = require('tape')
let validator = require('is-my-json-valid')

let testGoodFiles = [
	'nominee-schema',
	'screening-schema'
]

test('Internal test that invalid JSON schemas are an error', function(t) {
	let passed = false
	try {
		validator({
			$schema: 'http://json-schema.org/draft-07/schema#',
			title: 'Invalid Schema',
			type: 'PROPERTY DOES NOT EXIST'
		})
	} catch (e) {
		passed = true
	}
	t.ok(passed, 'exception is thrown for invalid JSON schema')
	t.end()
})

test('All the files parse as expected.', function(t) {
	testGoodFiles.forEach(function(file) {
		console.log(file);
		let json = require('./test/schemas/' + file + '.json')
		validator(json) // assert that all our testable JSON schema files are valid
		//console.log(json);

		let markdown = parser(json)
		//console.log(markdown);

		fs.writeFile('./test/markdown/'+file+'.md', markdown, err => {
			if (err) {
				console.error(err)
				return
			}
			//file written successfully
		})
	})
	t.end()
})
