// eslint-disable-next-line no-unused-vars
module.exports = async (error, req, res, next) => {
  if (error.errorCode) {
    res.status(error.status);

    const errorToSend = Object.assign({
      errorCode: error.errorCode,
      userMessage: req.t(`errors:${error.userMessage}`),
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
