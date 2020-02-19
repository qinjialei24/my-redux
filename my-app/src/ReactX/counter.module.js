const counter = {
  name: 'counter',
  state: {
    count: 10
  },
  reducer: {//将 reducer 内函数的 this 绑定为 state 对象
    add(payload) {
      this.count += 1
    },
    add(payload) {
      this.count -= 1
    }
  },
  effect: {// 将 effect 内函数的this 绑定为 reducer 对象
    asyncAdd(payload) {
      // setInterval(() => {
      //   this.add(payload)
      // }, 1000);
    }
  }
}

export default counter