// eslint-disable-next-line no-unused-vars
module.exports = async (error, req, res, next) => {
  if (error.errorCode) {
    res.status(error.status);

    // Create full path for joi errors
    if (error.extra.isJoi) {
      // eslint-disable-next-line no-param-reassign
      error.extra.errorPath = error.extra.details[0].path.join('');
    }

    const errorToSend = Object.assign({
      errorCode: error.errorCode,
      userMessage: req.t(`errors:${error.userMessage}`, error.extra),
      developerMessage: error.message,
      extra: error.extra,
    });
    res.json(errorToSend);
  } else {
    console.log(error);
    res.status(500);
    res.end();
  }
};
