/**
 * Responsibility: express app configuration
 * This includes middleware setting, error handling, static file serving, etc.
 */
// const path = require('path');
const express = require('express');
const morgan = require('morgan');
const i18nMiddleware = require('./middlewares/i18n');
const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/404');
const mainRouter = require('./controllers/main.router');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(i18nMiddleware);

app.get('/', (req, res) => {
  res.json('online');
});
app.use(mainRouter);

// Static files, might not need for pure API server
// app.use(express.static(path.resolve(__dirname, '../public')));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
