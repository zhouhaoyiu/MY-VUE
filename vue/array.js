import ARRAY_METHODS from "./config";
import observeArray from "./observeArray";

var originArrayMethods = Array.prototype
var arrayMethods = Object.create(originArrayMethods)

// 将方法指向原来的方法，但是对传入参数的进行响应处理
ARRAY_METHODS.map(function (method) {
  arrayMethods[method] = function () {
    var args = Array.prototype.slice.call(arguments)
    var rt = originArrayMethods[method].apply(this, args)

    var newArr

    //响应式处理新传入的数据
    switch (method) {
      case 'push':
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        // splice的第二项是配置项
        newArr = args.splice(2);
        break
      default:
        break;
    }
    newArr && observeArray(newArr)

    return rt
  }
})

export {
  arrayMethods,
  observeArray
}