# babel-plugin-catch-log



## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
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
