import { SyncWaterfallHook } from 'tapable'

const hook = new SyncWaterfallHook(['number'])

hook.tap('PluginA', (args) => {
  console.log('plugin A')
  console.log('plugin A arguments: ', args) // 100
  return undefined
})

hook.tap('PluginB', (args) => {
  console.log('plugin B')
  console.log('plugin B arguments: ', args) // 100，来自 call 的实参
  return 1
})

hook.tap('PluginC', (args) => {
  console.log('plugin C')
  console.log('plugin C arguments: ', args) // 1
  return undefined
})

hook.tap('PluginD', (args) => {
  console.log('plugin D')
  console.log('plugin D arguments: ', args) // 1，来自 PluginB 的返回值
  return 2
})

hook.call(100)
