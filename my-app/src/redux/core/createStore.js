export const createStore = function (reduce, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function changeState(action) {
    console.log("TCL: changeState -> action", action)
    state = reduce(state, action);
    console.log("TCL: changeState -> state", state)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState
  }
}