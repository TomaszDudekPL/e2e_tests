const chalk = require('chalk');

exports.generateAllureReport = (timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const allure = require('allure-commandline');
    const reportError = new Error('Could not generate Allure report');
    const generation = allure(['generate', '_results_/allure-raw', '--clean']);

    const generationTimeout = setTimeout(() => reject(reportError), timeout);

    generation.on('exit', function(exitCode) {
      clearTimeout(generationTimeout);

      if (exitCode !== 0) {
        return reject(reportError);
      }

      console.log('Allure report successfully generated');
      resolve();
    });
  });
};

exports.logFuncName = (color, bg) => {
  // function to get name from inside interested function. This is hack.
  const e = new Error('dummy');
  const stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');

  if(bg){
    console.log(chalk[color][bg].bold(`@@ ${stack}`));
  } else {
    console.log(chalk[color].bold(`@ ${stack}`));
  }

};
