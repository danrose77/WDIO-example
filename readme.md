# webriverio-v5 - test123

A front-end test automation framework using webdriverio and mocha, designed to be as simple as possible.

**Get started**

1. Install the latest stable version of node.
2. Clone the project
3. Install your dependencies

```
npm install
```
**Run Tests**

~~npm test~~

This runs all available tests, however it does not specify the environment, so they will fail. To run tests against a specific environment, use Grunt (see below).

## Gruntfile
To run all tests:
```
grunt webdriver:test --env=https://com-red.nonprod.sd.co.uk/ 
```

or to run a specific folder:
```
grunt webdriver:test --env=https://com-red.nonprod.sd.co.uk/ --folder=Other
```

or to run a specific test file:
```
grunt webdriver:test --env=https://com-red.nonprod.sd.co.uk/ --feature=superdry_02
```
