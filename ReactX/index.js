const counter = {
  name: 'counter',
  state: {
    count: 0
  },
  reducer: {//将 reducer 内函数的 this 绑定为 state 对象
    add(payload) {
      this.count += 1
      console.log("TCL: add -> this.count", this.count)
    }
  },
  effect: {// 将 effect 内函数的this 绑定为 reducer 对象
    asyncAdd(payload) {
      console.log("TCL: Add -> payload", payload)
      console.log('this 的值是：', this);
      setTimeout(() => {
        this.add()
      }, 1000);
    }
  }
}

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

class Store {
  constructor({ modules = [] }) {
    this.modulesNames = modules.map(module => module.name)
    this.instalModule(modules)
    this.bindContext('reducer', 'state')
    this.bindContext('effect', 'reducer')
  }

  instalModule(modules) {
    modules.forEach(module => {
      this[module.name] = module
    })
  }

  bindContext(moduleKey, context) {
    this.modulesNames.forEach(moduleName => {
      const currentModule = this[moduleName]
      Object.keys(currentModule[moduleKey]).forEach(key => {
        const fn = currentModule[moduleKey][key]
        currentModule[moduleKey][key] = fn.bind(currentModule[context])
      })
    })
  }

}

const store = new Store({
  modules: [counter, todo]
})

// store.counter.reducer.add(1)
store.counter.effect.asyncAdd(1)
// store.counter.effect.asyncAdd(1)

// store.counter.subscribe(state => {

// })


