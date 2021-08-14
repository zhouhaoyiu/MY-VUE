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
  // return [1,2,3]
})

console.log(vm)