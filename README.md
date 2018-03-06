# Commands

Unlock CSS module feature.

```
  npm run eject
```

In webpack.config.dev.js and webpack.config.prod.js:

```
test: /\.css$/,
use: [
  require.resolve('style-loader'),
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
  },
```

Other commands:

```
  rm -rf node_modules
  rm package-lock.json
  npm install
```

```
  create-react-app bug-test
  $ cp -a bug-test bug-test-copy
  $ cd bug-test-copy
  $ npm start   
```

Prop Type validation
```
  npm install --save prop-types
```
