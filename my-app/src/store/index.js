import { createStore, combineReducers } from "redux";
import todo from "./modules/todo";
import counter from "./modules/counter";

const reducer = combineReducers({
  todo,
  counter,
})

const _store = createStore(reducer)

export default _store