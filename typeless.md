# 如果不考虑类型
``` js
function Sandwich(...list) {
  let sandwich = list.pop()
  let bread
  while(bread = list.pop())
    sandwich = make(bread, sandwich)
  
  return sandwich
}

function make(bread, vege) {
  return function(ctx) {
    return bread(ctx, vege)
  }
}
```
但，更简单的写法，使“变数”增多（当前函数，是 bread 还是 vege？）  
而判断 bread 与 vege 需要引入大量类型控制  
代码量的减少，使程序更复杂，不可取