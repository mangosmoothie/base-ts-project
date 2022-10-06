# Base Project

Basic TypeScript project to build on. 

## Quick Start

### Prerequisites

- node (tested with `v16.14.1`)

### Usage

To create a project base on this one just install the dependencies and copy all config files:

```shell
cd <your_project_root>

npm install --save-dev \
 @swc/cli \
 @swc/core \
 @swc/jest \
 @types/jest \
 @types/node \
 @typescript-eslint/eslint-plugin \
 @typescript-eslint/parser \
 eslint \
 eslint-config-airbnb-base \
 eslint-config-prettier \
 eslint-import-resolver-typescript \
 eslint-plugin-import \
 eslint-plugin-prettier \
 jest \
 prettier \
 regenerator-runtime \
 typescript
 
mkdir src
cp ../base-project/src/* ./src
cp ../base-project/.eslintrc.json ./
cp ../base-project/.gitignore ./
cp ../base-project/.prettierrc ./
cp ../base-project/.swcrc ./
cp ../base-project/jest.config.js ./
cp ../base-project/tsconfig.json ./
```

### Running

To run tests and linters you will need to add the following `scripts` and `"type": "module"` to your `package.json`

```json
{
  "name": "my-project",
  ...
  "type": "module",
  "scripts": {
    "build": "swc src -d dist",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "test": "jest --ci",
    "start": "npm run build && NODE_ENV=production node --experimental-specifier-resolution=node dist/index.js"
  },
  ...
}
```

Then you can use the scripts thusly:

- `npm run start` to run the application
- `npm run lint` to run the linter
- `npm test` to run the tests
