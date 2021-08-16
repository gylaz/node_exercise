import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

import './config/init';
import './db/init';
import router from './router';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const error = {
    title: err.message,
    errorId: res.sentry,
  };

  if (err.statusCode === 500) {
    error.title = 'API server encountered an unexpected error.';
  }

  res.status(status).json(error);
  next();
});

export default app;
