/* Useful Debug Functions */
const chalk = require('chalk');

module.exports = function(message){
  console.log(chalk.green("DEBUG ") + message);
};
