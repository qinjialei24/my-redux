import { createStore } from 'redux';
// import { createStore, combineReducers, applyMiddleware } from '../my-redux';
import count from "./reducers/count";
import todo from "./reducers/todo";
// import { logMiddleware } from "../my-redux/middlewares/logMiddleware";
// import { timeMiddleware } from "../my-redux/middlewares/timeMiddleware";


function combineReducers(reducerMap) {
  const stateNames = Object.keys(reducerMap)
  return (state, action) => {
    const nextStat = {}
    stateNames.forEach(stateName => {
      const reducer = reducerMap[stateName]
      nextStat[stateName] = reducer(state[stateName], action)
    })
    return nextStat
  }
}


const reducer = combineReducers({
  count: count,
  todo: todo,
})

const appState = {
  count: 0,
  todo: []
}

const logMiddleware = store => dispatch => action => {
  console.log('action 的值是：', action);
  // const state = store.getState()
  dispatch(action)
}

const timeMiddleware = store => dispatch => action => {
  console.log(new Date().getTime());
  dispatch(action)
}


const newCreateStore = applyMiddleware(logMiddleware, timeMiddleware)(createStore)

// store.dispatch = timeMiddleware(store)(logMiddleware(store)(store.dispatch))


const store = newCreateStore(reducer, {})



// const store = createStore(reducer, {}, applyMiddleware(logMiddleware, timeMiddleware))



function applyMiddleware(...middlewares) {
  return oldCreateStore => {
    return (reducer, initialState) => {
      const store = oldCreateStore(reducer, initialState)
      const chain = middlewares.map(middleware => middleware(store))
      let dispatch = store.dispatch
      chain.reverse().forEach(middleware => {
        dispatch = middleware(dispatch)
      })
      store.dispatch = dispatch
      return store
    }
  }
}




// const _dispatch = store.dispatch

// store.dispatch = action => {
//   console.log('action 的值是：', action);
//   _dispatch(action)
// }

// const _dispatch2 = store.dispatch

// store.dispatch = action => {
//   console.log(new Date().getTime());
//   _dispatch2(action)
// }


export default store