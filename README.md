### Importing library

You can import the generated bundle to use the whole library generated by this starter:

```javascript
import myLib from 'mylib'
```

Additionally, you can import the transpiled modules from `dist/lib` in case you have a modular library:

```javascript
import something from 'mylib/dist/lib/something'
```

### NPM scripts
 - `npm install`: install dependencies
 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
### Where the files are
- actual library: 'src/loanlibrary'
- test :'test/loanlibrary.test'