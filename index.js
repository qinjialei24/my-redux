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

const store = createStore(allReducer, rootState)

store.subscribe(() => {
  const state = store.getState()
  console.log("state", state)
})

store.dispatch({
  type: 'changeUserName'
})

store.dispatch({
  type: 'changeAdminName'
})
