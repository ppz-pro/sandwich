const Sandwich = require('../index').default

{
  const f = Sandwich(
    [
      function(vege, str) {
        return vege(str + 'a')
      },
      function(vege, str) {
        return vege(str + 'b')
      }
    ],
    function(str) {
      return str + 'c'
    }
  )

  test('字符串拼接1', () => {
    expect(f('')).toBe('abc')
    expect(f('1')).toBe('1abc')
  })
}

{
  const f = Sandwich(
    [
      function(vege, str) {
        return vege('a' + str)
      },
      function(vege, str) {
        return vege(str + 'b')
      },
      function(vege, str) {
        return vege(str + 'c')
      },
      function(vege, str) {
        return vege(str + 'dd')
      }
    ],
    function(str) {
      return 'yes!' + str
    }
  )

  test('字符串拼接2', () => {
    expect(f('')).toBe('yes!abcdd')
    expect(f('haha')).toBe('yes!ahahabcdd')
  })
}

{
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

  test('字符串拼接2', () => {
    expect(f('start')).toBe('start1b2b3b!!3a2a1a')
  })
}