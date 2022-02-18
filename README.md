### :warning: STILL IN DEVELOPMENT

---

<a href='https://www.npmjs.com/package/atomic-webpack-plugin' style='margin: 0 0.2rem;' />
  <img src='https://img.shields.io/npm/v/atomic-webpack-plugin' alt='npm version' height='18'>
</a>

# atomic-webpack-plugin

A webpack plugin for use with the intention to build the index file for components based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology.

## Why?

Originally started by the [ARc](https://github.com/diegohaz/arc) template. Using the 'Dont worry' index file has some issues, esspecially if you are running in typescript. More info [here](https://github.com/diegohaz/arc/issues/131)

```js
// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
const req = require.context(".", true, /\.\/[^/]+\/[^/]+\/index\.js$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, "$1");
  module.exports[componentName] = req(key).default;
});
```

> Atomic Design should be a solution, not another problem. If you want to create a component and don't know where to put it (atoms, molecules, organisms etc.), do not worry, do not think too much, just put it anywhere. After you realize what it is, just move the component folder to the right place. Everything else should work. [source](https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry)

The solution is to leverage the building process that most projects already use. atomic-webpack-plugin wa born.

## Getting Started

To begin, you'll need to install `atomic-webpack-plugin`:

```
npm install atomic-webpack-plugin--save-dev
```

or

```
yarn add -D atomic-webpack-plugin
```

Then add the plugin to your `webpack` config. For example:

webpack.config.js

```js
const AtomicPlugin = require("atomic-webpack-plugin");

module.exports = {
  plugins: [
    new AtomicPlugin({
      base: "./app/components",
      regularExpression: /\.?\/.+\/index\.tsx$/,
    }),
  ],
};
```

### Setup

You will need to add the aliases to get the intended module import style.

Example

```js
import { Button } from "components";
```

tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "components": ["./app/components"]
    }
  }
}
```

webpack.config.jj

```js
const AtomicPlugin = require("atomic-webpack-plugin");

module.exports = {
  plugins: [
    new AtomicPlugin({
      base: "./app/components",
      regularExpression: /\.?\/.+\/index\.tsx$/,
    }),
  ],
  resolve: {
    modules: ["./app/components"],
    alias: {
      components: path.resolve(__dirname, "app/components"),
    },
  },
};
```

### Folder structure

```
src/
  components/
    atoms/
      Button/
        index.tsx
        text.spec.ts
        index.stories.ts
    molecules/
    organisms/
    pages/
      LandingPage/
        index.tsx
        text.spec.ts
        index.stories.ts
    templates/
      layouts/
      containers/
      menus/
      transitions/

```

## Options

| Prop                                    | Default                                                                                | Description                                                                                                                                                    |
| --------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| base (`string`)                         | `./src/components`                                                                     | The folder location of your components folder                                                                                                                  |
| output (`string`)                       | `index.ts`                                                                             | The filename that will be generated at `base`                                                                                                                  |
| header (`string`)                       | `// @generated\n// This file is automatically generated and should not be edited.\n\n` | The test at the top of the `output` file                                                                                                                       |
| regularExpression (`regularExpression`) | `/\.?\/.+\/index\.tsx$/`                                                               | The expression used to find the files of the components. If you are using foldered components like `Atom/Button/index.tsx` then the default will work for you. |

## License

MIT
