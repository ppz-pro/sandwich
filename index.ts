type vege<In, Out> = (context: In) => Out
type bread<In, Out> = (vege: vege<In, Out>, context: In) => Out

/** 构造三明治代码 */
export default
function Sandwich<In = void, Out = void>(breads: bread<In, Out>[], vege: vege<In, Out>) {
  let bread
  while(bread = breads.pop()) {
    let b = bread, v = vege // 保留块作用域下的 bread、vege
    vege = function(ctx) {
      return b(v, ctx)
    }
  }
  
  return vege
}