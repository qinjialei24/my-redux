import { createStore, combineReducers } from "redux";
import todo from "./reducers/todo";
import counter from "./reducers/counter";

const reducer = combineReducers({
  todo,
  counter,
})

const _store = createStore(reducer)

export default _store