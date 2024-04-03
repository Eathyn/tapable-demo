import { AsyncSeriesHook } from 'tapable'

const hook = new AsyncSeriesHook()

hook.tapAsync('PluginA', (callback) => {
  setTimeout(() => {
    console.log('plugin A')
    callback()
  }, 1000)
})

hook.tapAsync('PluginB', (callback) => {
  console.log('plugin B')
  callback()
})

hook.callAsync(() => {
  console.log('End')
})
