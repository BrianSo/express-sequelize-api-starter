# Express API Starter
[![Build Status](https://travis-ci.org/BrianSo/express-sequelize-api-starter.svg?branch=master)](https://travis-ci.org/BrianSo/express-sequelize-api-starter)
[![Coverage Status](https://coveralls.io/repos/github/BrianSo/express-sequelize-api-starter/badge.svg?branch=master)](https://coveralls.io/github/BrianSo/express-sequelize-api-starter?branch=master)

# Requirements
- Node.js 8

# Ingredients
1. express
2. sequelize
3. joi request validation
4. i18n
5. error handling
6. Jest testing framework
7. eslint
8. commitlint
9. Travis CI, Gitlab CI ready

# Opt out
### Commit hooks
You may not be comfortable for the commit hook. You can remove eslint, commitlint checking by `yarn remove husky`. For more information about commit hook, please take a look at [husky](https://www.npmjs.com/package/husky)
### Sequelize
You may want to use other orm library like mongoose. To remove sequelize, you may do the following:
1. remove all model files under `/src/models`
2. update the bootstrap method in `src/server.js` to remove sequelize setups
3. remove `src/utils/dbConnection.js`, `src/utils/loadModels.js`
4. update `.env`
5. update `test/setup.js` to remove sequelize setups

# Getting started
```sh
git clone git@gitlab.com:wsws/express-api-starter.git
yarn

# start the development server
yarn run dev

# run unit test
yarn test

# watch and run unit test
yarn run dev-test

# run eslint
yarn run lint
```

# Recommended tools
1. nvm
2. yarn
3. visual studio code (VSCode has JS IntelliSense)
    1. with the following plugins
    2. Code Spell Checker
    3. EditorConfig for VS Code
    4. ESLint
    5. Git Lens
    6. Paste and Indent
    7. Auto-Open Markdown Preview
4. or WebStorm
5. or other coding tool with similar features of 3.2 - 3.4

# Coding guide
1. Git commits
    1. This project uses [commitlint] (https://github.com/marionebl/commitlint)
    2. [commits must follow this format] (#commit-formats)
    ```
    type(scope?): subject
    body?
    footer?
    ```
    3. a commit must focus on one topic only
    4. a commit should not involve too much files (>5 files)
    5. a commit subject should start with a present tense verb (except a fix commit)
2. Placing files
    1. never use index.js
    2. [favor module hierarchy instead of file type] (#favor-module-hierarchy-instead-of-file-type)

# Coding guide details

### Commit formats

The format of a commit must be
```
type(scope?): subject
body?
footer?
```

Where type can only be 
```js
[
    'feat', // adding, completing a new feature
    'fix', // bug fix
    'docs', // changes to documentation
    'refactor', // refactoring production code, formatting, missing semi colons,
    'test', // adding missing tests, refactoring tests; no production code change
    'config', // updating grunt tasks etc; no production code change
]
```

### favor module hierarchy instead of file type

Do: put files with different file types but with related business logic into one folder
- placing user.controller.js, user.model.js, user.service.js into one folder

Do not: put all files with the same type into one folder
- placing all .js into one folder
- placing all .css into one folder
- placing all .service.js into one folder
- placing all .model.js into one folder
- placing all .controller.js into one folder
