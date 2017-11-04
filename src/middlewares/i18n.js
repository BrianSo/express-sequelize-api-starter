const i18next = require('i18next');
const translations = require('../i18n');

module.exports = (req, res, next) => {
  const option = {
    lng: req.query.lang || 'en',
    fallbackLng: 'en',
    ns: ['translation', 'errors'],
    defaultNS: 'translation',
    // debug: true,
    resources: translations,
  };

  const i18n = i18next.createInstance();
  i18n.init(option, (err, t) => {
    if (err) {
      next(err);
      return;
    }
    req.i18n = i18n;
    req.t = t;
    next();
  });
};
