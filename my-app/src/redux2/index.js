// 2.02
export function createStore(reducer, initialState, enhancer) {
  if (enhancer) {
    const newCreateStore = enhancer(createStore)
    return newCreateStore(reducer, initialState)
  }
  let state = initialState
  let listeners = []
  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}


export const combineReducers = reducerMap => {
  const stateNames = Object.keys(reducerMap)
  return (state, action) => {
    const nextState = {}
    stateNames.forEach(stateName => {
      const reducer = reducerMap[stateName]
      nextState[stateName] = reducer(state[stateName], action)
    })
    return nextState
  }
}


export const applyMiddleware = (...middlewares) => {
  return oldCreateStore => {
    return (reducer, initialState) => {
      const store = oldCreateStore(reducer, initialState)
      let chain = middlewares.map(middleware => middleware(store))
      let dispatch = store.dispatch
      chain.forEach(middleware => {
        dispatch = middleware(dispatch)
      })
      store.dispatch = dispatch
      return store
    }
  }
}
