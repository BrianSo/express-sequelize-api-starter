
const ErrorTypes = {
  RESOURCE_NOT_FOUND: {
    errorCode: 'RESOURCE_NOT_FOUND',
    userMessage: 'RESOURCE_NOT_FOUND',
    status: 404,
  },
  VALIDATION_ERROR: {
    errorCode: 'VALIDATION_ERROR',
    userMessage: 'VALIDATION_ERROR',
    status: 400,
  },
};

/**
 * Create an error for stack trace
 * @param {ErrorType} errorType
 * @param {any?} extra
 * @param {override?} extra
 */
const createError = (incomeErrorType, extra, override) => {
  const errorType = Object.assign({}, incomeErrorType, override);

  const developerMessage = errorType.developerMessage || errorType.userMessage;
  const error = new Error(developerMessage);

  // assign values
  error.errorCode = errorType.errorCode;
  error.userMessage = errorType.userMessage;
  error.status = errorType.status;

  error.extra = extra || {};
  return error;
};

function createJoiError(joiError) {
  return createError(ErrorTypes.VALIDATION_ERROR, { isJoi: true, details: joiError.details });
}

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
  createJoiError,
  catchErrorRoute,
};
