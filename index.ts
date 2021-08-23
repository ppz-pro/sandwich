export
type context = {
  vege?: sandwich
}

export
type sandwich = (ctx: context) => any

export default function Sandwich(...list: Array<sandwich>): sandwich {
  for(let i=0; i<list.length-1; i++) {
    const tmp = list[i]
    list[i] = function(ctx) {
      ctx = ctx || {}
      // i 是块级作用域里的变量
      // list[i + 1] 是 make 过的 list[i + 1]
      ctx.vege = list[i + 1]
      return tmp(ctx)
    }
  }
  
  return list[0]
}