import { createStore, combineReducers } from "redux";
import todo from "./modules/todo";
import counter from "./modules/counter";

const reducer = combineReducers({
  todo,
  counter,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const _dispatch = store.dispatch

store.dispatch = (type, data) => _dispatch({ type, data })

export default store