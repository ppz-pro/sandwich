import Sandwich, { context } from '.'

const f = Sandwich(
  function(ctx: context) {
    console.log(1)
    ctx.vege(ctx)
  },
  function(ctx: context) {
    ctx.vege(ctx)
    console.log(2)
  },
  function(ctx: context) {
    console.log(3)
  }
)

f()