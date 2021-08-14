# vue数据劫持  使用ES5

vm : 构造出的vue实例的this

## index.js 定义Vue构造函数 进行初始化操作

- ```_init(options)``` 将```options```赋值到实例```$options```上，执行```initState(vm)```(init.js)

## init.js初始化状态

- ```initState(vm)``` 获得配置项，如果有data配置项，执行```initData(vm)```对data进行初始化

- ```initData(vm)```取到data，若data为函数则```call(vm)```绑定```this```,否则返回原来的```data```或者一个空对象。得到的结果赋值给```vm```上的```_data```与实例```$options```上的```data```后,对```data```中的值在```vm```中赋值键名并且代理访问

  ```          javascript
  for (var key in data) {
    //proxy.js
    proxyData(vm, '_data', key)
  }
  ```

- 将vm_data中的数据进行响应式处理
  ```observe(vm._data)```

- ### proxy.js 代理数据

  - 形如vm.xxx这样操作数据其实是操作_data中的数据

     ```javascript
     /**
      * 代理 _data中的数据
      * vm : Vue实例
      * target :_data
      * key : data中键名
      */
      proxyData(vm,target,key){
         Object.defineProperty(vm, key, {
        get() {
          return vm[target][key]
        },
        set(newValue) {
          vm[target][key] = newValue
        }
       })
      }
     ```

- ### observe.js 观察数据     (```data:vm_data```)

  - ```    javascript
            function observe(data) {
             //不是对象或者无数据，不观察
            if (typeof data !== 'object' |    |     data === null) {
                return
            }
            //调用observer.js的观察者
            return new Observer(data)
           }
        ```

  - observer.js
    - 若data为Array,进行处理,否则walk(data)
    - walk(data)将data中的每一个
      key及其value取出,进行响应处理 (对value中的每个值也会走一遍响应式处理)```defineReactiveData(data, key, value)```

      ```javascript
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
            if (newValue === value) {
              return
            }
            value = newValue
          }
        })
      }
      ```
