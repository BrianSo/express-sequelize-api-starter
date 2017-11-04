const { catchErrorRoute, createError, ErrorTypes } = require('../utils/errors');

// eslint-disable-next-line no-unused-vars
module.exports = catchErrorRoute(async (req, res, next) => {
  throw createError(ErrorTypes.RESOURCE_NOT_FOUND);
});
