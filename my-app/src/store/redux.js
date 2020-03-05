// 组件=》dispatch action =》middleware=》reducer=》调用 listener 函数=》组件更新通过 setState

export const createStore = (reducer, initialState, middlewares) => {
  let state = initialState
  let listens = []

  const subscribe = (listener) => {
    listens.push(listener)
  }


  const dispatch = (action) => {
    //1. 调用 reducer 2.通知 listener
    state = reducer(state, action)
    listens.forEach(listener => listener())
  }

  const getState = () => state

  dispatch({
    type: 'xxxx'
  })


  return {
    dispatch,
    subscribe,
    getState
  }

}

// const state = {
//   reducer1: {reducer1:'1'},
//   reducer2: {reducer2:'1'},
// }

// const reducer1 = (state = { reducer1: '1' }, action) => {
//   switch (action.type) {
//     case 'add':
//       return {
//         ...state,
//         count: state.reducer1 + 1
//       }
//     default:
//       return state
//   }
// }

// const reducer2 = (state = { reducer2: '1' }, action) => {
//   switch (action.type) {
//     case 'add':
//       return {
//         ...state,
//         count: state.reducer2 + 1
//       }
//     default:
//       return state
//   }
// }

// const reducer = combineReducers({
//   reducer1,
//   reducer2
// })


export const combineReducers = (reducerObject = {}) => {
  const reducersName = Object.keys(reducerObject)
  return (state, action) => {
    const nextState = {}
    reducersName.forEach(reducerName => {
      const currentReducer = reducerObject[reducerName]
      nextState[reducerName] = currentReducer(state[reducerName], action)
    })
    return nextState
  }

}


export const applyMiddleware = (...middlewares) => {
  return function rewriteCreateStoreFunc(oldCreateStore) { // store.dispatch 覆盖
    return (reducer, initialState) => {
      const store = oldCreateStore(reducer, initialState)
      const chain = middlewares.map(middleware => middleware(store));
      console.log("rewriteCreateStoreFunc -> chain", chain)
      let dispatch = store.dispatch;
      chain.reverse().map(middleware => {
        dispatch = middleware(dispatch);
      });
      store.dispatch = dispatch
      return store
    }
  }
}

// // 返回一个函数，该函数可以重写 createStore
// const rewriteOldCreateStore = applyMiddleware([logMiddleware, timeMiddleware])

// //使用 rewriteOldCreateStore ,产生 newCreateStore
// const newCreateStore = rewriteOldCreateStore(oldCreateStore)

// newCreateStore(reducer, {})

// [a, b]

// a(b())