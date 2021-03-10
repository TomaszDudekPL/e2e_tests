# End to End Testing

## Description
Tests are based on version 6 of WebdriverIO (js framework) and need NodeJS in version minimum 12 to work.

Full documentation of WebdriverIO v6 is [here](https://v6.webdriver.io/).

## How to start tests
### Requirements
I. Installed globally on local computer:
1. NodeJS v12 (is recommended to use Node Version Manager to switch between versions)
2. Chrome v89

II. Clone repository: https://github.com/TomaszDudekPL/e2e_tests.git

III. Install dependencies: ```npm install```

IV. Run all tests using command: ```npm start```

## Tests results report generating

After each run of tests the history of results is stored and can be visualised as html Allure Raport with full video documentary.
It is placed in ```allure-report``` directory and can used by outer service to observe in timeline. 
