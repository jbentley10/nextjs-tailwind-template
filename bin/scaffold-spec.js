/**
 * @file bin/scaffold-spec.js
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldSpec = require('./scaffolding/scaffold-spec');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  return scaffoldSpec({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/component-spec'),
    dest: path.resolve(pkgpath.self(), dirs.src, 'cypress/integrations/', argv.name)
  });
}
