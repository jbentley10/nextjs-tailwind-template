/*
  Enables scaffolding of new FC items (e.g. components, tags) using the dopl templating library.
  See the stateless-component folder for the template source files.
*/

const chalk = require('chalk');
const dopl = require('dopl');

module.exports = ({
  name,
  src,
  dest
}) => {

  // if(!/^[A-Z][A-Za-z]+$/.test(name)) {
  //   console.error(chalk.bgRed('The name should be in PascalCase.'));
  //   process.exit(1);
  // }

  return dopl({
    output: dest,
    src: src,
    data: {
      name,
      className: createClassName(name)
    }
  });
}

const createClassName = name => {
  // Force uppercase to build the className
  const cleanName = `${name[0].toUpperCase()}${name.slice(1,name.length)}`
  console.log(cleanName)
  // transforms PascalCase into slug-case for the CSS class name
  return cleanName
    .replace(/[A-Z]/g, word => '-' + word.toLowerCase())
    .substring(1); // trim off leading - from the first capital
}
