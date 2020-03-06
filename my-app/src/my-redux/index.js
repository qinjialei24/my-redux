export function createStore(reducer, initialState, enhancer) {
  if (enhancer) {
    const newCreateStore = enhancer(createStore)
    return newCreateStore(reducer, initialState)
  }
  let state = initialState
  let listeners = [];
  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const getState = () => state

  return {
    subscribe,
    dispatch,
    getState
  }



}

export function combineReducers(reducerMap) {
  const reducerKeys = Object.keys(reducerMap) // ['user','admin']

  return (state, action) => {
    const nextState = {}
    reducerKeys.forEach(reducerKey => {
      const currentReducer = reducerMap[reducerKey] // userReducer
      nextState[reducerKey] = currentReducer(state[reducerKey], action)
    })
    return nextState
  }
}


export function applyMiddleware(...middlewares) {
  return (oldCreateStore) => { //重写之后的 createStore
    return (reducer, initialState) => { // 新的 createStore
      const store = oldCreateStore(reducer, initialState)
      const chain = middlewares.map(middleware => middleware(store))
      let dispatch = store.dispatch
      chain.forEach(middleware => {
        dispatch = middleware(dispatch)
      })
      store.dispatch = dispatch
      return store
    }
  }
}