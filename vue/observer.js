import defineReactiveData from "./reactive"
import { arrayMethods } from './array'
import observeArray from "./observeArray"
function Observer(data) {
  if (Array.isArray(data)) {
   data.__proto__ = arrayMethods

   //传入的可能也是array
   observeArray(data)
  } else {
    // console.log(`Auther :ZHY`)
    this.walk(data)
  }
}
Observer.prototype.walk = function (data) {
  var keys = Object.keys(data)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    var value = data[key]

    defineReactiveData(data, key, value)
  }

}
export default Observer