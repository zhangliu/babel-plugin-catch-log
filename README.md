# babel-plugin-catch-log
这个插件可以自动帮你收集异常到数组：`window.__elog`中。


## Example

**In**

```js
try {
  // your code
} catch (e) {
  // your exception handler code
}
```

**Out**

```js
try {
  // your code
} catch (e) {
  __elog.push(e) // this babel plugin will add this line automatic.
  // your exception handler code
}
```

## Installation

```sh
$ npm install babel-plugin-catch-log
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["catch-log"]
}
```

### Via CLI

```sh
$ babel --plugins catch-log script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["catch-log"]
});
```
