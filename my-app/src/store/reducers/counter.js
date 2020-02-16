import { handleActions } from "../util";
const initialState = {
  count: 0
}

const reducers = {
  add: (state, action) => state.count + 1,
  minus: (state, action) => state.count - 1,
}


export default (state = initialState, action) => handleActions({ state, action, reducers })

