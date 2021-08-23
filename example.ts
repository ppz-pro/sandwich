import Sandwich from '.'

const f = Sandwich<string, number>([
  function(vege, ctx) {
    console.log('1. before')
    vege(ctx)
    console.log('1. after')
    return 1
  },
  function(vege, ctx) {
    console.log('2. before')
    vege(ctx)
    console.log('2. after')
    return 2
  }
],
  function(ctx) {
    console.log('vege', ctx)
    return 3
  }
)

console.log(f('gogo'))