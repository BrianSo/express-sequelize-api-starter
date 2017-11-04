
const ErrorTypes = {
  RESOURCE_NOT_FOUND: {
    errorCode: 'RESOURCE_NOT_FOUND',
    userMessage: 'RESOURCE_NOT_FOUND',
    status: 404,
  },
};

/**
 *
 * @param {ErrorType} errorType
 * @param {any?} extra
 */
const createError = (errorType, extra) => {
  const developerMessage = errorType.developerMessage || errorType.userMessage;
  const error = new Error(developerMessage);

  // assign values
  error.errorCode = errorType.errorCode;
  error.userMessage = errorType.userMessage;
  error.status = errorType.status;

  if (extra) {
    error.extra = extra;
  }
  return error;
};

/**
 * Wrap a request handler to catch errors from the requestHandler and pass it to next()
 * @param {RequestHandler} requestHandler
 */
const catchErrorRoute = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  ErrorTypes,
  createError,
  catchErrorRoute,
};
