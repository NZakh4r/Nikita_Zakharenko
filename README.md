# Selenium

 - [x] TypeScript
 - [x] [Jasmine](https://jasmine.github.io/) instruction scenarios `spec/loginSpec.ts`
 - [x] OOP principles (see `loginClass.ts`)
 - [x] Design Patterns: `Builder`, `By`, `until`, `Key` (see `loginClass.ts`)
 - [x] Run test via `npm test`

### Instruction
There are two options

- Run each test scenario manually
	```sh
	$ node ./node_modules/jasmine/bin/jasmine.js --config=./support/jasmine.json
	$ start http://localhost:8888?spec=<SPEC>
	```
- Run predefined scenarios all at once using
	```sh
	$ npm test
	```
	
### Demo
The process of the test-script:

1. Loggin into the https://opensource-demo.orangehrmlive.com by grabbing the corresponding fields above
2. Creating a new user:
	> Admin → Add → Fill in data → Save
3. Removing created user
4. https://youtu.be/91cqV10JszQ
