// This file doesn't use es6 since it needs to work on old versions of Node

// eslint-disable-next-line no-var
var version = parseInt(process.versions.node.split('.')[0], 10);

if (version < 4) {
  // eslint-disable-next-line
  console.log('Meteor Up requires node v4 or newer. You are using ' + process.version);
  process.exit(1);
}