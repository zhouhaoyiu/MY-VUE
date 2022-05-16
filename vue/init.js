import proxyData from "./proxy"
import observe from "./observe"

function initState(vm) {
  var options = vm.$options

  if (options.data) {
    initData(vm)
  }
}
function initData(vm) {
  var data = vm.$options.data

  //data.call(vm) 拿到vm上的data函数
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}

  for (var key in data) {
    proxyData(vm, '_data', key)
  }

  observe(vm._data)
}

export {
  initState
}