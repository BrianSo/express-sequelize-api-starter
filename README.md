# Express API Starter
[![pipeline status](https://gitlab.com/wsws/express-api-starter/badges/master/pipeline.svg)](https://gitlab.com/wsws/express-api-starter/commits/master)
[![coverage report](https://gitlab.com/wsws/express-api-starter/badges/master/coverage.svg)](https://gitlab.com/wsws/express-api-starter/commits/master)

# Requirements
- Node.js 8

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

1. Placing files
    1. never use index.js
    2. [favor module hierarchy instead of file type] (#favor-module-hierarchy-instead-of-file-type)

# Coding guide details

### favor module hierarchy instead of file type

Do: put files with different file types but with related business logic into one folder
- placing user.controller.js, user.model.js, user.service.js into one folder

Do not: put all files with the same type into one folder
- placing all .js into one folder
- placing all .css into one folder
- placing all .service.js into one folder
- placing all .model.js into one folder
- placing all .controller.js into one folder
