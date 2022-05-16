/**
 * 代理 _data中的数据
 * vm : Vue实例
 * target :_data
 * key : data中键名
 */

function proxyData(vm, target, key) {
  // console.log(vm)
  // console.log('target ' + target)
  // console.log('key ' + key)

  Object.defineProperty(vm, key, {
    get() {
      return vm[target][key]
    },
    set(newValue) {
      vm[target][key] = newValue
    }
  })
}

export default proxyData