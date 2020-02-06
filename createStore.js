export const createStore = initState => {
  let state = initState
  const dependences = []

  const changeState = newState => {
    state = newState
    dependences.forEach(deps => deps())
  }

  const subscribe = component => dependences.push(component)

  const getState = _ => state

  return {
    changeState,
    subscribe,
    getState
  }
}


