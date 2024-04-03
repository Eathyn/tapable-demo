import { AsyncParallelHook } from 'tapable'

const hook = new AsyncParallelHook()

hook.tapAsync('PluginA', (callback) => {
  setTimeout(() => {
    console.log('plugin A')
    callback()
  }, 2000)
})

hook.tapAsync('PluginB', (callback) => {
  console.log('plugin B')
  callback()
})

hook.callAsync(() => {
  console.log('End')
})
