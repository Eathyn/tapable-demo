import { SyncLoopHook } from 'tapable'

const hook = new SyncLoopHook()
let isUndefined = false
let cycles = 0

hook.tap('PluginA', () => {
  cycles++
  console.log(`第 ${cycles} 次循环`)
  console.log('plugin A')
  return undefined
})

hook.tap('PluginB', () => {
  console.log('plugin B')
  if (isUndefined) {
    return undefined
  } else {
    isUndefined = true
    return 2
  }
})

hook.tap('PluginC', () => {
  console.log('plugin C')
  return undefined
})

hook.call()
