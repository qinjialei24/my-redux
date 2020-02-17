import { createStore, combineReducers } from "redux";
import todo from "./modules/todo";
import counter from "./modules/counter";

const reducer = combineReducers({
  todo,
  counter,
})

const store = createStore(reducer)

const _dispatch = store.dispatch

store.dispatch = (type, data) => _dispatch({ type, data })

export default store