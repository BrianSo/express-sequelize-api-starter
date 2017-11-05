const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.resolve(__dirname, '../models'));

const models = {};
const modelRegex = /^([A-Z]([A-Za-z0-9]+))\.js$/;
files.forEach((fileName) => {
  const result = modelRegex.exec(fileName);
  if (result) {
    // eslint-disable-next-line
    models[result[1]] = require(path.resolve(__dirname, '../models', fileName));
  }
});

module.exports = models;
