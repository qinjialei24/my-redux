import { createStore, combineReducers, applyMiddleware } from "redux";
import count from "./reducers/count";
import todo from "./reducers/todo";


const reducer = combineReducers({
  count: count,
  todo: todo,
})

const store = createStore(reducer, {})
// const store = createStore(reducer, {},enhancer)

export default store