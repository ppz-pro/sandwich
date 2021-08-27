# 三明治
构造三明治代码

``` bash
npm install @ppzp/sandwich
```

# example
##### JS
``` js
const Sandwich = require('@ppzp/sandwich').default

const f = Sandwich(
  [
    function(vege, str) {
      str += '1b'
      str = vege(str)
      str += '1a'
      return str
    },
    function(vege, str) {
      str += '2b'
      str = vege(str)
      str += '2a'
      return str
    },
    function(vege, str) {
      str += '3b'
      str = vege(str)
      str += '3a'
      return str
    }
  ],
  function(str) {
    return str + '!!'
  }
)

console.log(
  f('start')
) // 'start1b2b3b!!3a2a1a'
```

##### TS
``` ts
import Sandwich from '@ppzp/sandwich'

const f = Sandwich<string, string> (
  [
    function(vege, str) {
      str += '1b'
      str = vege(str)
      str += '1a'
      return str
    },
    function(vege, str) {
      str += '2b'
      str = vege(str)
      str += '2a'
      return str
    },
    function(vege, str) {
      str += '3b'
      str = vege(str)
      str += '3a'
      return str
    }
  ],
  function(str) {
    return str + '!!'
  }
)

console.log(
  f('start')
) // 'start1b2b3b!!3a2a1a'
```

# 一个更“简易”的实现
[点这里](https://github.com/ppz-pro/sandwich.ts/blob/master/typeless.md)