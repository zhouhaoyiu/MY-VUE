/**
 * 数据响应式处理
 * data：数据
 * key
 * value
 */

import observe from "./observe"

function defineReactiveData(data, key, value) {
  // console.log(data)
  // console.log(key)
  // console.log(value)
  observe(value)
  Object.defineProperty(data, key, {
    get() {
      console.log(`响应式获取${key}，`,value)
      return value
    },
    set(newValue) {
      console.log(`响应式设置${key}，`,newValue)
      if (newValue === value) {
        return
      }
      observe(newValue)
      value = newValue
    }
  })
}

export default defineReactiveData