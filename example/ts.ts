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