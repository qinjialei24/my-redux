interface module {
  state: object,
  reducer: object
}

interface option {
  modules: Array<module>
}

const counter = {
  state: {
    count: 0
  },
  reducer: {
    add(state, payload: number) {
      state.count = payload
    }
  },
}

class ReactX {
  private rawModules: Array<module>
  constructor(option: option) {
    this.rawModules = option.modules

  }
}



const store = new ReactX({
  modules: [counter],
}) 