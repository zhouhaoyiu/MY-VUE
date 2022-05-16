import Vue from 'vue'

let vm = new Vue({
  el: '#app',
  data() {
    return {
      title: '学生列表',
      classNum: 1,
      total: 2,
      teacher: ['zhy1', 'zhy2'],
      info: {
        a: {
          b: 1
        }
      },
      students: [
        {
          id: 1,
          name: 'red'
        },
        {
          id: 2,
          name: 'ming'
        }
      ]
    }
  }
  //data 不使用函数也是可以的，测试已经通过
  // data: {
  //   title: '学生列表',
  //   classNum: 1,
  //   total: 2,
  //   teacher: ['zhy1', 'zhy2'],
  //   info: {
  //     a: {
  //       b: 1
  //     }
  //   },
  //   students: [
  //     {
  //       id: 1,
  //       name: 'red'
  //     },
  //     {
  //       id: 2,
  //       name: 'ming'
  //     }
  //   ]
  // }
  // return [1,2,3]
})
console.log(vm.students.splice(1, 1, {
  id: 3,
  name: 'xiaozhou'
}))
