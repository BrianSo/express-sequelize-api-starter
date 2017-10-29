
module.exports = {

  extends: [
    'canonical',
  ],
  // http://marionebl.github.io/commitlint/#/reference-rules
  rules: {
    'type-enum': [2, 'always',
      [
        'feat', // adding, completing a new feature
        'fix', // bug fix
        'docs', // changes to documentation
        'refactor', // refactoring production code, formatting, missing semi colons,
        'test', // adding missing tests, refactoring tests; no production code change
        'config', // updating grunt tasks etc; no production code change
      ],
    ],
    'scope-enum': [2, 'always',
      [
      ],
    ],
  },
};
