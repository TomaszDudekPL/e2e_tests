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
