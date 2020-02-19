import ReactX from "./reactX";
import counter from "./counter.module.js";
import todo from "./todo.module.js";

const store = new ReactX({
  modules: [counter, todo]
})

store.subscribe(state => {
  // console.log("TCL: state", state)

})

// store.counter.reducer.add(1)
// store.counter.effect.asyncAdd(10)
// store.todo.reducer.addTodo(10)
// store.counter.effect.asyncAdd(1)

export default store
