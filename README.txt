# First-issue
Generation of Markdown docs from JSON schema

In order to convert JSON schema file to markdown, there are several modules to be installed before running test.js,
1. json_schema_to_markdown module from https://www.npmjs.com/package/json-schema-to-markdown
2. tape module to test tap-producing from https://www.npmjs.com/package/tape
3. JSON schema validation check, https://www.npmjs.com/package/is-my-json-valid

npm install json_schema_to_markdown
npm install tape
npm install is-my-json-valid


test.js will convert the json schema files from the test/schemas folder and save them to the test/markdown directory.

node test.js
