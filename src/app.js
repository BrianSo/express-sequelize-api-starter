const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

if (!process.env.CI) {
    dotenv.config({ path: ".env" });
} else {
    dotenv.config({ path: ".env.ci" });
}

const app = express();

app.use(morgan('dev'));

app.use((req, res) => {
    res.json('online');
});

module.exports = app;
