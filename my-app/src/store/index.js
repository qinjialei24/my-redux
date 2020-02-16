import { createStore, combineReducers } from "redux";
import todo from "./reducers/todo";
import counter from "./reducers/counter";

const reducer = combineReducers({
  todo,
  counter,
})

// console.log("TCL: reducer", reducer)

const _store = createStore(reducer)

// const store = {
//   dis
// }

export default _store