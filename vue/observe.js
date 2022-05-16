/**
 * 观察 _data中数据
 */
import Observer from './observer'

function observe(data) {
  //不是对象或者无数据，不观察
  if (typeof data !== 'object' || data === null) {
    return
  }

  return new Observer(data)
}

export default observe