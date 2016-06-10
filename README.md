# karma-base64-to-js-preprocessor

Preprocessor for converting base64-encoded files into JavaScript strings.

## Installation

Just run:
```bash
npm install karma-base64-to-js-preprocessor --save-dev
```

## Configuration
This is the default configuration:
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.exe.base64': ['base64-to-js']
    },
    files: [
      '**/*.exe.base64',
      '*.js'
    ]
  });
};
```

## How does it work ?

This preprocessor converts base64-encoded files into JS strings and publishes them in the global `window.__raw__`.

For instance the file `test.base64`:
```
VGhpcyBpcyBhIHRlc3QuCg==
```
will be served as `test.base64.js`:
```js
window.__raw__ = window.__raw__ || {};
window.__raw__['test'] = "This is a test.";
```
