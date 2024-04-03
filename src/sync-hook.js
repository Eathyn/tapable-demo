import { SyncHook } from 'tapable'

const syncHook = new SyncHook()

syncHook.tap('PluginA', (name, age) => {
  console.log('plugin A')
})

syncHook.tap('PluginB', (name, age) => {
  console.log('plugin B')
})

syncHook.tap('PluginC', (name, age) => {
  console.log('plugin C')
})

syncHook.call()
