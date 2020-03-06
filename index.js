// let state = {
//   count: 1
// };

// let listeners = [];

// function subscribe(listener) {
//   listeners.push(listener);
// }

// function changeCount(count) {
//   state.count = count;
//   listeners.forEach(listen => {
//     listen()
//   })
// }

// subscribe(() => {
//   console.log('state.count 的值是：', state.count);
// })

// changeCount(2)

// 

let rootState = {
  user: {
    name: ''
  },
  admin: {
    name: ''
  }
}

function userReducer(state, action) {
  switch (action.type) {
    case 'changeUserName':
      return {
        ...state,
        name: 'user'
      }
    default:
      return state
  }
}

function adminReducer(state, action) {
  switch (action.type) {
    case 'changeAdminName':
      return {
        ...state,
        name: 'admin'
      }
    default:
      return state
  }
}






function createStore(reducer, initialState, enhancer) {
  if (enhancer) {
    const enhancerStore = enhancer(createStore);
    return enhancerStore(reducer, initialState);
  }

  let state = initialState
  let listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => {
      listener()
    });
  }

  function getState() {
    return state
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}

function combineReducers(reducers = {}) {
  const reducerKeys = Object.keys(reducers) // [user,admin]
  return (state, action) => {
    let nextState = {}
    reducerKeys.forEach(reducerKey => {
      const currentReducer = reducers[reducerKey]
      nextState[reducerKey] = currentReducer(state[reducerKey], action)
    })
    return nextState
  }
}

//期望这样用
const allReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
})

// const store = createStore(allReducer, rootState)

const logStateMiddleware = store => dispatch => action => {
  console.log('last state:', store.getState());
  dispatch(action)
  // console.log('current state:', store.getState());
}

const logTimeMiddleware = store => dispatch => action => {
  console.log(new Date().getTime());
  dispatch(action)
}

// store.dispatch = logTimeMiddleware(logStateMiddleware(store.dispatch))



function applyMiddleware(...middlewares) {
  return createStore => { // return rewrite createStore  func

    return (reducer, initialState) => {
      const store = createStore(reducer, initialState)
      const chain = middlewares.map(middleware => middleware(store)); // 每一项就是一个重写 dispatch 的函数，执行后返回重写后的dispatch
      let dispatch = store.dispatch

      chain.reverse().forEach(middleware => {
        dispatch = middleware(dispatch)
      })
      store.dispatch = dispatch
      return store
    }
  }
}

// applyMiddleware(logStateMiddleware, logTimeMiddleware)

// [a, b]
// a(b())

// /*接收旧的 createStore，返回新的 createStore*/
// const newCreateStore = applyMiddleware(logStateMiddleware, logTimeMiddleware)(createStore);

// /*返回了一个 dispatch 被重写过的 store*/
// const store = newCreateStore(allReducer, rootState);


const store = createStore(allReducer, rootState, applyMiddleware(logStateMiddleware, logTimeMiddleware));


//重写 dispatch
// const _dispatch = store.dispatch

// store.dispatch = (action) => {
//   //状态改变前
//   console.log('last state:', store.getState());

//   _dispatch(action)//改变状态
//   //状态改变后
//   console.log('current state:', store.getState());
// }

// const _dispatch2 = store.dispatch


// store.dispatch = (action) => {
//   //状态改变前
//   console.log(new Date().getTime());
//   _dispatch2(action)//改变状态
//   //状态改变后
// }



store.subscribe(() => {
  const state = store.getState()
})

store.dispatch({
  type: 'changeUserName'
})

store.dispatch({
  type: 'changeAdminName'
})








// export {
//   createStore,
//   combineReducers,

// }