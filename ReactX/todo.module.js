const todo = {
  name: 'todo',
  state: {
    todoList: []
  },
  reducer: {//将 reducer 内函数的 this 绑定为 state 对象
    addTodo(payload) {
      this.todoList.push(payload)
    }
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