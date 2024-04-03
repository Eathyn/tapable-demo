import { SyncBailHook } from 'tapable'

const syncBailHook = new SyncBailHook()

syncBailHook.tap('PluginA', () => {
  console.log('plugin A')
  return undefined
})

syncBailHook.tap('PluginB', () => {
  console.log('plugin B')
  return 1
})

syncBailHook.tap('PluginC', () => {
  // 不会被执行
  console.log('plugin C')
  return undefined
})

syncBailHook.call()
