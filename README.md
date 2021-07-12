# Maths
Javascript number manipulation package.

## Install

``` npm install @123npmmaster/maths ```
``` javascript
 // index.js
const maths = require('@123npmmaster/maths')

maths.arithmetic.add(1,2) // 3
maths.squares.square(2) // 4
```

## Build
``` bash
git clone https://github.com/samthegitguy/maths
cd maths
npm install
```

When adding a new file to source make sure to require and export from index.js e.g.
``` javascript
exports.yourFileName = require('/path/to/your/file/yourFileName.js')
```
## Test
This project uses [facebook/jest](https://www.github.com/facebook/jest) for testing.
``` bash
npm test
```
## Addons
This project uses the following VScode addons:
[vivaxy.vscode-conventional-commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)  

