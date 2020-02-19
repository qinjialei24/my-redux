const todo = {
  name: 'todo',
  state: {
    list: [1],
    inputValue: 'reactX'
  },
  reducer: {//将 reducer 内函数的 this 绑定为 state 对象
    addTodo(payload) {
      this.list.push(payload)
    },
    changeInput(payload) {
      this.inputValue = payload
    },
  },
  effect: {// 将 effect 内函数的this 绑定为 reducer 对象
    asyncAddTodo(payload) {
      setTimeout(() => {
        this.addTodo(payload)
      }, 1000);
    }
  }
}

export default todo