const counter = {
  name: 'counter',
  state: {
    count: 0
  },
  reducer: {//将 reducer 内函数的 this 绑定为 state 对象
    add(payload) {
      console.log('add payload 的值是：', payload);
      this.count += 1
      console.log("TCL: add -> this.count", this.count)
    }
  },
  effect: {// 将 effect 内函数的this 绑定为 reducer 对象
    asyncAdd(payload) {
      console.log('asyncAdd payload 的值是：', payload);
      setTimeout(() => {
        this.add(payload)
      }, 1000);
    }
  }
}

export default counter