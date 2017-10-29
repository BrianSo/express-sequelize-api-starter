/**
 * Responsibility: express app configuration
 * This includes middleware setting, error handling, static file serving, etc.
 */
// const path = require('path');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/404');
const mainRouter = require('./controllers/main.router');

if (!process.env.CI) {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env.ci' });
}

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json('online');
});
app.use(mainRouter);

// Static files, might not need for pure API server
// app.use(express.static(path.resolve(__dirname, '../public')));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
