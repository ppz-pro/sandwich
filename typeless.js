module.exports = function Sandwich(...list) {
  let sandwich = list.pop()
  let bread
  while(bread = list.pop()) {
    let b = bread, v = sandwich
    sandwich = function(ctx) {
      return b(v, ctx)
    }
  }
  
  return sandwich
}