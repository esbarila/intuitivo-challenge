# intuitivo-challenge

Cypress challenge for Intuituvo

## How to run tests

### Prerequisite

Having node and npm previously installed:

1. Clone this repository
   `git clone https://github.com/esbarila/intuitivo-challenge.git`
2. Install dependencies `npm i`

3. Run the test `npm run test`

(it will run headlessly)

In order see the test run in a browser (headed) do:

`npm run test-headed`

Also, if you want to report the result into a file (see example [output.log](output.log)) you may try this on a bash terminal:

`npm run test > outputFile.log`

Otherwise you might open the Cypress suite:
`npx cypress open`
And choose testIntuitivo.cy.js

### Acceptance Criteria
[Found here](acceptance-criteria.MD)

### Video demo:

https://github.com/esbarila/intuitivo-challenge/assets/47305731/c83380b1-f55f-4fc3-9200-3e14761b568f
