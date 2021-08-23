type vege<In, Out> = (context: In) => Out
type bread<In, Out> = (vege: vege<In, Out>, context: In) => Out

/** 构造三明治代码 */
export default
function Sandwich<In = void, Out = void>(breads: bread<In, Out>[], vege: vege<In, Out>) {
  let sandwich = vege
  let bread
  while(bread = breads.pop()) {
    let b = bread, v = sandwich // 保留块作用域下的 bread、sandwich
    sandwich = function(ctx) {
      return b(v, ctx)
    }
  }
  
  return sandwich
}