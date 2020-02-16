export function handleActions({ state, action, reducers }) {
  const reducerKeys = Object.keys(reducers)
  return reducerKeys.includes(action.type) ? reducers[action.type](state, action) : state
}