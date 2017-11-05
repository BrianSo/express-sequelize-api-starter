const dotenv = require('dotenv');

let result;
if (!process.env.CI) {
  result = dotenv.config({ path: '.env' });
} else {
  result = dotenv.config({ path: '.env.ci' });
}

module.exports = result;
