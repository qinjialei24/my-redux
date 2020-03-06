export function createStore(reducer, initialState, enhancer) {
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
