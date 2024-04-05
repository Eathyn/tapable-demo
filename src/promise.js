import { AsyncSeriesHook } from 'tapable'

const hook = new AsyncSeriesHook(['name', 'age'])

console.time('calculation')

hook.tapPromise('event-1', (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('event-1')
      console.log(name, age)
      console.timeLog('calculation', 'event-1')
      resolve()
    }, 2000)
  })
})

hook.tapPromise('event-2', (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('event-2')
      console.log(name, age)
      console.timeLog('calculation', 'event-2')
      resolve()
    }, 2000)
  })
})

hook.promise('Eathyn', 27).then(() => {
  console.timeLog('calculation', 'end')
})
