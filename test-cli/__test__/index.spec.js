test('测试代码生成', () => {
  const src = new (require('../index'))()
  const ret = src.getTestSource('func', 'class')

  expect(ret).toBe(`
      test('TEST func生成', () => {
        const func = require(../class)
        const ret = func()
        // expect(ret).toBe('return test')
      })
  `)
})

// test('测试文件名生成', () => {
//   const src = new (require('../index'))()
//   const ret = src.getTestFileName('/abc/class.js')
//   expect(ret).toBe('/abc/__test__/class.spec.js')
// })
