---
presentation:

 theme: black.css
 progress: true
 height: 1000

---


<!-- slide -->
# 从0实现 Redux 
<!-- slide -->
## Redux 的核心概念
- 发布订阅模式
- `(state,action) => newState`
<!-- slide -->
## 发布订阅模式
```js
import React from "react";
import store from "../store/index";

class Count extends React.Component {
  constructor() {
    super()
    this.state = store.getState().count
    store.subscribe(() => {//订阅
      this.setState(store.getState().count)
    })
  }
  add = () => { store.dispatch({ type: 'add' }) }//发布
  minus = () => { store.dispatch({ type: 'minus' }) }
  render() {
    return (
      <div>
        <h1>当前count的值是：</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}
export default Count
```
<!-- slide -->
### `(state,action) => newState`
```js
const initialState = {
  count: 0
}

function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + 1
      }

    case 'minus':
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }
}

export default countReducer

```




<!-- slide -->


1. 从0实现 Redux 
2. Redux 的问题
   1. 全局单一 store 的理念导致产生了一颗巨大的状态树，状态树的任意节点更新，将导致所有组件触发更新，即使该组件不依赖该状态
   2. immutable 写起来太恶心
   3. 模板代码太多，比如需要定义各种烦人的 action
   4. action 与 reduce 是一一对应的，但是官方却推荐将两者独立成两个文件，导致维护成本上升
3. 
<!-- slide -->
实现一个最简单的状态管理
```js
let state = {
  count: 1
};
let listeners = [];

function subscribe(listener) {
   listeners.push(listener);
}

function changeCount(count) {
  state.count = count;
  listeners.forEach(listen=>{
    listen()
  })
}
```
<!-- slide -->
# Redux 的问题

<!-- slide -->
 - Redux 全局单一 store 的理念导致产生了一颗巨大的状态树，状态树的任意节点更新，将导致所有组件触发更新，即使该组件不依赖该状态
```js
const state ={
  a:{
    count:0,
    b:{
      c:{
        count:1
      }
    }
  }
}

```

<!-- slide -->
```js
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.todo.list,
    inputValue: state.todo.inputValue,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    asyncDelete: data => {
      // dispatch(store.todo.add, data)
      dispatch(store.todo.asyncDelete, data)
    },
    inputChange: data => {
      dispatch(store.todo.changeInput, data.target.value)
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
```
