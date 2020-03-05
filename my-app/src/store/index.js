import { createStore, combineReducers, applyMiddleware } from "redux";
import count from "./reducers/count";
import todo from "./reducers/todo";


const reducer = combineReducers({
  count: count,
  todo: todo,
})

// const logMiddleware = store => dispatch => action => {
//   console.log('last state的值是：', store.getState());
//   dispatch(action)
//   console.log('current state的值是：', store.getState());
// }


// const _dispatch = store.dispatch

// store.dispatch = action => {
//   console.log(store.getState(), 'last state');
//   _dispatch(action) //改变状态
//   console.log(store.getState(), 'current state');
// }

// const _dispatch2 = store.dispatch

// store.dispatch = action => {
//   console.log('时间戳');
//   _dispatch2(action) //改变状态
// }

//
// const logMiddleware = store => (dispatch) => {
//   return (action) => {
//     console.log(store.getState(), 'last state');
//     dispatch(action) //timeMiddleware(store.dispatch)
//     console.log(store.getState(), 'current state');
//   }
// }

// const timeMiddleware = store => (dispatch) => {
//   console.log("timeMiddleware -> dispatch", dispatch)
//   return (action) => {
//     dispatch(action)
//     console.log('时间戳');
//   }
// }

// const rewriteOldCreateStore = applyMiddleware(logMiddleware, timeMiddleware)
// const newCreateStore = rewriteOldCreateStore(createStore)

// const store = newCreateStore(reducer, [])


const store = createStore(reducer, {})
// store.dispatch = logMiddleware(timeMiddleware(store.dispatch)) //dispatch




// const store = createStore(reducer, {}, applyMiddleware(logMiddleware))

export default store